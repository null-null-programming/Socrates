# app.py
from fastapi import FastAPI, HTTPException, Path
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from uuid import uuid4
from typing import Dict

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 各セッションの状態を格納する辞書
sessions: Dict[str, Dict[str, int or str]] = {}


class GetMessage(BaseModel):
    text: str
    sender: str


@app.post("/start_session")
async def start_session():
    # 新しいセッションIDを生成し、初期状態を設定する
    session_id = str(uuid4())
    sessions[session_id] = {"current_turn": "A", "round": 1}
    return {"session_id": session_id}


@app.post("/debate/{session_id}/chat")
async def chat(session_id: str = Path(...), message: GetMessage = None):
    # セッションが存在するかチェック
    if session_id not in sessions:
        raise HTTPException(status_code=404, detail="Session not found")
    current_session = sessions[session_id]

    # メッセージの送信者が現在のターンと一致するかチェック
    if current_session["current_turn"] != message.sender:
        raise HTTPException(status_code=400, detail="It's not your turn")

    # メッセージIDを生成し、メッセージをエコーバック
    message_id = str(uuid4())
    reply = message.text

    # ターンを交代させる
    current_session["current_turn"] = "B" if message.sender == "A" else "A"

    # ラウンドを進める条件
    if current_session["current_turn"] == "A":
        current_session["round"] += 1

    return {"reply": reply, "message_id": message_id, "round": current_session["round"]}


@app.get("/debate/{session_id}/session")
async def get_session(session_id: str):
    # セッションが存在するかチェック
    if session_id not in sessions:
        raise HTTPException(status_code=404, detail="Session not found")
    return {
        "current_turn": sessions[session_id]["current_turn"],
        "round": sessions[session_id]["round"],
    }
