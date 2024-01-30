from fastapi import FastAPI, Depends, HTTPException, WebSocket
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel
from typing import Optional
from debate import Debate as DebateModel
from user import User, UserCreate, UserInDB
from realtime import RealTime
from jose import jwt
from typing import Optional
from fastapi import status
from ai_scoring import AIScoring
from rankings import Rankings
from dependencies import get_db
from auth import auth_router, get_current_user
from fastapi.websockets import WebSocketDisconnect
from config import settings  # configモジュールから設定をインポート

app = FastAPI()

# Include the authentication router
app.include_router(auth_router)

# Instantiate the RealTime, AIScoring, and Rankings classes
real_time_service = RealTime()
ai_scoring_service = AIScoring()
rankings_service = Rankings()


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db),
) -> Optional[UserInDB]:
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials.",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(
            token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM]
        )
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        # データベースからユーザー情報を取得
        user = db.query(User).filter(User.username == username).first()
        if user is None:
            raise credentials_exception
        # UserInDBスキーマに変換することで、パスワードなどの機微な情報を除去
        user_in_db = UserInDB(**user.__dict__)
        return user_in_db
    except Exception as e:  # type: ignore
        raise credentials_exception


# Main class to manage Debate instances
class MainService:
    def __init__(self):
        self.debates = {}
        self.real_time_service = real_time_service
        self.ai_scoring_service = ai_scoring_service
        self.rankings_service = rankings_service

    def get_debate(self, debate_id: int, db: Session) -> DebateModel:
        if debate_id not in self.debates:
            debate_data = (
                db.query(DebateModel).filter(DebateModel.id == debate_id).first()
            )
            if not debate_data:
                raise HTTPException(status_code=404, detail="Debate not found")

            self.debates[debate_id] = debate_data
        return self.debates[debate_id]

    def create_user(self, db: Session, user_create: UserCreate) -> UserInDB:
        new_user = User.create(db=db, user_create=user_create)
        return new_user

    def add_contribution_and_score(
        self, debate_id: int, content: str, current_user: UserInDB, db: Session
    ):
        # ディベートを取得
        debate = self.get_debate(debate_id, db)
        # ユーザーからの貢献をディベートに追加
        debate.add_contribution(user=current_user, content=content)
        # 貢献内容を評価する
        score = ai_scoring_service.evaluate_contribution(contribution=content)
        # スコアに基づいて何かをする（例: ユーザーランキングを更新）
        rankings_service.update_rankings(user=current_user, score=score)
        # 新しい貢献とスコアの更新を全参加者にブロードキャストする
        debate_broadcast_message = (
            f"New contribution from {current_user.username} with score {score}"
        )
        # RealTime Serviceを使ってブロードキャスト
        result = self.real_time_service.broadcast_update(
            debate_id, debate_broadcast_message
        )
        return {"message": "Contribution added and scored"}


main_service = MainService()

# Routes definition from here


@app.post("/users/", response_model=UserInDB)
def create_user_endpoint(user_create: UserCreate, db: Session = Depends(get_db)):
    return main_service.create_user(db=db, user_create=user_create)


@app.post("/debates/{debate_id}/participants/")
def add_participant_to_debate(
    debate_id: int,
    db: Session = Depends(get_db),
    current_user: UserInDB = Depends(get_current_user),
):
    debate = main_service.get_debate(debate_id, db)
    debate.add_participant(user=current_user)
    return {"message": "Participant added to the debate"}


@app.post("/debates/{debate_id}/contributions/")
def add_contribution_to_debate(
    debate_id: int,
    content: str,
    db: Session = Depends(get_db),
    current_user: UserInDB = Depends(get_current_user),
):
    return main_service.add_contribution_and_score(debate_id, content, current_user, db)


@app.websocket("/ws/debates/{debate_id}/")
async def websocket_endpoint(
    websocket: WebSocket, debate_id: int, db: Session = Depends(get_db)
):
    try:
        # 新しいWebSocket接続をdebate_idに基づいて登録
        await real_time_service.subscribe(websocket, debate_id)

        # メッセージの受信を永遠に待機（あるいはクライアントからの特定のアクションまで）
        while True:
            # WebSocketからのデータ受信を待機
            data = await websocket.receive_text()
            # 必要に応じてデータを処理
            if data == "end":
                break
    except Exception as e:
        pass

    try:
        pass
    except WebSocketDisconnect:
        # Your code here
        await real_time_service.unsubscribe(websocket, debate_id)
        print(f"WebSocket disconnected for debate {debate_id}")
