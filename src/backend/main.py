## main.py
from fastapi import FastAPI, Depends, HTTPException, WebSocket
from sqlalchemy.orm import Session
from auth import auth_router, get_current_user
from debate import Debate as DebateModel
from user import User, UserCreate, UserInDB
from realtime import RealTime
from ai_scoring import AIScoring
from rankings import Rankings
from dependencies import get_db

app = FastAPI()

# Include the authentication router
app.include_router(auth_router)

# Instantiate the RealTime, AIScoring, and Rankings classes
real_time_service = RealTime()
ai_scoring_service = AIScoring()
rankings_service = Rankings()


# Main class to manage Debate instances
class Main:
    def __init__(self):
        self.debates = {}

    def get_debate(self, debate_id: int, db: Session) -> DebateModel:
        if debate_id not in self.debates:
            debate_data = (
                db.query(DebateModel).filter(DebateModel.id == debate_id).first()
            )
            if not debate_data:
                raise HTTPException(status_code=404, detail="Debate not found")
            debate_data.real_time = real_time_service
            debate_data.ai_scoring = ai_scoring_service
            self.debates[debate_id] = debate_data
        return self.debates[debate_id]


main = Main()


@app.post("/users/", response_model=UserInDB)
def create_user_endpoint(user_create: UserCreate, db: Session = Depends(get_db)):
    return User.create_user(db=db, user_create=user_create)


@app.post("/debates/{debate_id}/participants/")
def add_participant_to_debate(
    debate_id: int,
    db: Session = Depends(get_db),
    current_user: UserInDB = Depends(get_current_user),
):
    debate = main.get_debate(debate_id, db)
    debate.add_participant(user=current_user)
    return {"message": "Participant added to the debate"}


@app.post("/debates/{debate_id}/contributions/")
def add_contribution_to_debate(
    debate_id: int,
    content: str,
    db: Session = Depends(get_db),
    current_user: UserInDB = Depends(get_current_user),
):
    debate = main.get_debate(debate_id, db)
    debate.add_contribution(user=current_user, content=content)
    score = ai_scoring_service.evaluate_contribution(contribution=content)
    if (
        score is not None and 0 <= score <= 1
    ):  # Assuming score is a normalized value between 0 and 1
        rankings_service.update_rankings(user=current_user, score=score)
        debate.broadcast_update(
            message=f"New contribution from {current_user.username}"
        )
        return {"message": "Contribution added and scored"}
    else:
        raise HTTPException(status_code=400, detail="Invalid score")


@app.websocket("/ws/debates/{debate_id}/")
async def websocket_endpoint(
    websocket: WebSocket, debate_id: int, db: Session = Depends(get_db)
):
    debate = main.get_debate(debate_id, db)
    await real_time_service.subscribe(
        websocket=websocket, debate_id=debate_id, topic=debate.topic
    )


def setup():
    # This function would be responsible for setting up the application,
    # such as database connections, mounting routers, middleware, etc.
    # For the sake of this example, we will assume that the setup is minimal.
    # However, in a real-world scenario, this function would include:
    # - Database connection initialization
    # - Middleware configuration
    # - Any other necessary application setup steps
    pass


# Call the setup function to configure the application
setup()
