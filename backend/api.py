# app.py
from fastapi import FastAPI, HTTPException, Path
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from uuid import uuid4
from typing import Dict
from google.cloud import firestore

app = FastAPI()
db = firestore.Client()

# CORSの設定
origins = ["http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# セッションの状態とメッセージの履歴を格納
sessions: Dict[str, Dict[str, any]] = {}


# メッセージモデル
class GetMessage(BaseModel):
    text: str
    sender: str


class UserRequest(BaseModel):
    user_id: str


def create_session(transaction, user1_ref, user2_ref):
    session_id = str(uuid4())
    session_ref = db.collection("sessions").document(session_id)
    user1 = user1_ref.get(transaction=transaction).to_dict()
    user2 = user2_ref.get(transaction=transaction).to_dict()

    transaction.set(
        session_ref,
        {"participants": [user1["user_id"], user2["user_id"]], "isActive": True},
    )
    # マッチングに成功したユーザーを待機リストから削除
    transaction.delete(user1_ref)
    transaction.delete(user2_ref)


def match_users():
    waiting_list_ref = db.collection("waiting_list")
    users = list(waiting_list_ref.order_by("timestamp").limit(2).get())

    if len(users) == 2:
        # トランザクションを開始
        transaction = db.transaction()
        create_session_transaction = transaction.create_function(create_session)

        # トランザクションでセッション作成とユーザー削除を実行
        create_session_transaction(transaction, users[0].reference, users[1].reference)


@app.post("/random_match")
async def random_match(user_request: UserRequest):
    waiting_list_ref = db.collection("waiting_list")
    waiting_list_ref.add(
        {"user_id": user_request.user_id, "timestamp": firestore.SERVER_TIMESTAMP}
    )
    return {
        "status": "success and waiting",
    }


@app.get("/match_status/{user_id}")
async def get_match_status(user_id: str):
    sessions_ref = db.collection("sessions")
    query = sessions_ref.where("participants", "array_contains", user_id).get()

    if query:
        for session in query:
            return session.to_dict()
    else:
        return {"status": "waiting"}


# 新しいセッションを開始
@app.post("/start_session")
async def start_session():
    session_id = str(uuid4())
    # messages リストを追加して会話履歴を保持
    sessions[session_id] = {"current_turn": "A", "round": 1, "messages": []}
    return {"session_id": session_id}


@app.post("/enqueue")
async def enqueue_for_session(user_request: UserRequest):
    # ユーザーをマッチング待機リストに追加
    waiting_list_ref = db.collection("waiting_list")
    waiting_list_ref.add(
        {"user_id": user_request.user_id, "timestamp": firestore.SERVER_TIMESTAMP}
    )
    return {"status": "queued", "user_id": user_request.user_id}


# メッセージを送信
@app.post("/debate/{session_id}/chat")
async def chat(session_id: str, message: GetMessage):
    # セッション確認
    if session_id not in sessions:
        raise HTTPException(status_code=404, detail="Session not found")
    current_session = sessions[session_id]

    # ターンの確認
    if current_session["current_turn"] != message.sender:
        raise HTTPException(status_code=400, detail="It's not your turn")

    message_id = str(uuid4())
    current_session["messages"].append(
        {"id": message_id, "text": message.text, "sender": message.sender}
    )

    # ターンを交代
    current_session["current_turn"] = "B" if message.sender == "A" else "A"

    # ラウンドを進める
    if current_session["current_turn"] == "A":
        current_session["round"] += 1

    return {
        "reply": message.text,
        "message_id": message_id,
        "round": current_session["round"],
    }


# セッション情報の取得
@app.get("/debate/{session_id}/session")
async def get_session(session_id: str):
    # セッション確認
    if session_id not in sessions:
        raise HTTPException(status_code=404, detail="Session not found")
    session_info = {
        "current_turn": sessions[session_id]["current_turn"],
        "round": sessions[session_id]["round"],
        "messages": sessions[session_id]["messages"],  # メッセージ履歴も返す
    }
    return session_info
