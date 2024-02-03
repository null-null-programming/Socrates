# app.py
from fastapi import FastAPI, HTTPException, Path
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from uuid import uuid4
from typing import Dict, List
from lib import oauth20

app = FastAPI()

# CORSの設定
origins = ["http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(oauth20.router)

# セッションの状態とメッセージの履歴を格納
sessions: Dict[str, Dict[str, any]] = {}


# メッセージモデル
class GetMessage(BaseModel):
    text: str
    sender: str


# 新しいセッションを開始
@app.post("/start_session")
async def start_session():
    session_id = str(uuid4())
    # messages リストを追加して会話履歴を保持
    sessions[session_id] = {"current_turn": "A", "round": 1, "messages": []}
    return {"session_id": session_id}


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
