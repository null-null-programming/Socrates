## app.py
from fastapi import FastAPI, Depends, HTTPException, WebSocket
from sqlalchemy.orm import Session
from main import Main, setup
from user import UserCreate, UserInDB
from auth import router as auth_router, get_current_user
from dependencies import get_db

app = FastAPI()

# Include the authentication router
app.include_router(auth_router)

# Instantiate the Main class
main_service = Main()


@app.on_event("startup")
async def startup_event():
    # Run any startup tasks
    setup()


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
        debate = main_service.get_debate(debate_id, db)
        await main_service.real_time_service.subscribe(
            websocket=websocket, debate_id=debate_id, topic=debate.topic
        )
    except Exception as e:
        # Handle exceptions such as WebSocketDisconnect, database errors, etc.
        # Log the error and close the WebSocket connection if necessary
        await websocket.close()
