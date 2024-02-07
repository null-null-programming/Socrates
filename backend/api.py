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
