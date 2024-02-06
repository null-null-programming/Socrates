from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from google.cloud import firestore
from datetime import datetime

app = FastAPI()
db = firestore.Client()

# CORS設定
origins = ["http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class UserRequest(BaseModel):
    user_id: str


class SendMessageRequest(BaseModel):
    sender_id: str
    sender_name: str
    text: str
    isChat: bool


@app.post("/enqueue")
async def enqueue_for_session(user_request: UserRequest):
    waiting_list_ref = db.collection("waiting_list").document(user_request.user_id)
    waiting_list_ref.set(
        {"user_id": user_request.user_id, "timestamp": firestore.SERVER_TIMESTAMP}
    )
    return {"status": "queued", "user_id": user_request.user_id}


@app.post("/session/{session_id}/message")
async def send_message(session_id: str, message: SendMessageRequest):
    session_ref = db.collection("sessions").document(session_id)

    # セッションのドキュメントを取得して、現在の current_turn と participants を取得します。
    session_doc = session_ref.get()
    if not session_doc.exists:
        raise HTTPException(status_code=404, detail="Session not found")

    session_data = session_doc.to_dict()
    current_turn_id = session_data.get("current_turn")
    participants = session_data.get("participants", [])

    if not message.isChat:
        # current_turn を更新します。
        if len(participants) > 1:
            # current_turn のユーザーIDから、次の参加者へのインデックスを計算します。
            current_turn_index = participants.index(current_turn_id)
            next_turn_index = (current_turn_index + 1) % len(participants)
            next_turn_id = participants[next_turn_index]
            session_ref.update({"current_turn": next_turn_id})
        else:
            # 参加者が1人しかいない場合、current_turn をそのままにします。
            raise HTTPException(
                status_code=400, detail="Not enough participants to switch turns"
            )

    # メッセージを debate コレクションに追加
    session_ref.collection("debate").add(
        {
            "sender": message.sender_id,
            "senderName": message.sender_name,
            "message": message.text,
            "timestamp": datetime.now(),
            "isChat": message.isChat,
        }
    )

    return {"text": message.text}


@app.get("/session/{session_id}/messages")
async def get_session_messages(session_id: str):
    session_ref = db.collection("sessions").document(session_id)
    session_doc = session_ref.get()
    if not session_doc.exists:
        raise HTTPException(status_code=404, detail="Session not found")

    session_data = session_doc.to_dict()
    current_turn = session_data.get("current_turn")
    participants = session_data.get("participants", [])

    messages = session_ref.collection("debate").order_by("timestamp").get()
    messages_data = [message.to_dict() for message in messages]

    return {
        "current_turn": current_turn,
        "participants": participants,
        "messages": messages_data,
    }
