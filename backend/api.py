from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from google.cloud import firestore
from datetime import datetime
from tools.completions import Completions

app = FastAPI()
# CORS設定
origins = ["http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# リクエストモデル定義
class EvaluationRequest(BaseModel):
    debate: str


# evalエンドポイント定義
@app.post("/session/{session_id}/eval")
async def evaluate_debate(request: EvaluationRequest):
    try:
        # ディベート評価処理
        completions = Completions()
        result = completions.get_eval_result(request.debate)
        print(result)
        return {"eval": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# final_evalエンドポイント定義
@app.post("/session/{session_id}/final_eval")
async def final_evaluate_debate(request: EvaluationRequest):
    try:
        # ディベート最終評価処理
        completions = Completions()
        result = completions.get_eval_result(request.debate)
        print(result)
        return {"eval": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
