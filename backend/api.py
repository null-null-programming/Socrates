from google.cloud import firestore
from tools.completions import Completions
import json
from fastapi import FastAPI, HTTPException, Header, Depends
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from firebase_admin import credentials, firestore, initialize_app, auth
from typing import Optional
import json

cred = credentials.Certificate("./keys/apiKey.json")
initialize_app(cred)


app = FastAPI()
# CORS設定
origins = ["http://localhost:3000", "https://socrates-413218.web.app/"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# リクエストモデル定義
class EvaluationAndRateRequest(BaseModel):
    debate: str
    my_debater_name: str
    opponent_uid: str


async def verify_token(authorization: Optional[str] = Header(None)):
    if authorization is None:
        raise HTTPException(status_code=401, detail="Authorization header missing")
    token = authorization.split(" ")[1]
    try:
        decoded_token = auth.verify_id_token(token)
        return decoded_token["uid"]
    except Exception as e:
        raise HTTPException(status_code=401, detail="Invalid token")


def calculate_elo_rating(ra, rb, result, k=32):
    ea = 1 / (1 + 10 ** ((rb - ra) / 400))
    new_ra = ra + k * (result - ea)
    return int(new_ra)


# evalエンドポイント定義
@app.post("/session/{session_id}/eval")
async def evaluate_debate(
    request: EvaluationAndRateRequest, uid: str = Depends(verify_token)
):
    try:
        # ディベート評価処理（この部分は具体的な実装に依存します）
        completions = Completions()
        result = completions.get_eval_result(request.debate)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    print(result)

    my_score = result[request.my_debater_name]["得点"]["合計"]
    opponent_name = [name for name in result if name != request.my_debater_name][0]
    opponent_score = result[opponent_name]["得点"]["合計"]

    # Firestoreから現在のレートを取得
    db = firestore.client()
    user_ref = db.collection("users").document(uid)
    opponent_ref = db.collection("users").document(request.opponent_uid)
    user_doc = user_ref.get()
    opponent_doc = opponent_ref.get()

    if not user_doc.exists or not opponent_doc.exists:
        raise HTTPException(status_code=404, detail="User not found")

    user_data = user_doc.to_dict()
    opponent_data = opponent_doc.to_dict()

    user_rate = user_data.get("rate", 1500)
    opponent_rate = opponent_data.get("rate", 1500)

    # 勝敗または引き分けに基づいてレートを計算
    result_value = 0.5  # 引き分けを想定
    if my_score > opponent_score:
        result_value = 1  # 勝利
    elif my_score < opponent_score:
        result_value = 0  # 敗北

    new_user_rate = calculate_elo_rating(user_rate, opponent_rate, result_value)
    new_opponent_rate = calculate_elo_rating(opponent_rate, user_rate, 1 - result_value)

    # Firestoreに新しいレートを更新
    user_ref.update({"rate": new_user_rate})
    opponent_ref.update({"rate": new_opponent_rate})

    print(
        {
            "result": result,
            "message": "Evaluation and rate update successful",
            "new_user_rate": new_user_rate,
            "new_opponent_rate": new_opponent_rate,
        }
    )

    return {
        "result": result,
        "message": "Evaluation and rate update successful",
        "new_user_rate": new_user_rate,
        "new_opponent_rate": new_opponent_rate,
    }


def firebase_function(request):
    return app(request)
