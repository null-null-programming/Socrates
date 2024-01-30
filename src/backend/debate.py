from typing import List, Dict
from pydantic import BaseModel
from fastapi import HTTPException, status
from .user import UserInDB
from .realtime import RealTime  # Assuming RealTime class is defined in realtime.py
from .ai_scoring import AIScoring  # Assuming AIScoring class is defined in ai_scoring.py

class Participant(BaseModel):
    id: int
    username: str

class Contribution(BaseModel):
    user_id: int
    content: str

class Debate(BaseModel):
    id: int
    topic: str
    participants: List[Participant] = []
    contributions: Dict[int, List[Contribution]] = {}
    real_time: RealTime = None  # Placeholder for RealTime instance
    ai_scoring: AIScoring = None  # Placeholder for AIScoring instance

    def add_participant(self, user: UserInDB) -> None:
        if any(participant.id == user.id for participant in self.participants):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="User already participating in the debate."
            )
        self.participants.append(Participant(id=user.id, username=user.username))

    def remove_participant(self, user: UserInDB) -> None:
        if user.id not in [participant.id for participant in self.participants]:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="User not participating in the debate."
            )
        self.participants = [participant for participant in self.participants if participant.id != user.id]

    def add_contribution(self, user: UserInDB, content: str) -> None:
        if not content.strip():
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Contribution content cannot be empty."
            )
        if user.id not in [participant.id for participant in self.participants]:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="User is not a participant of the debate."
            )
        contribution = Contribution(user_id=user.id, content=content)
        if user.id not in self.contributions:
            self.contributions[user.id] = []
        self.contributions[user.id].append(contribution)
        self.broadcast_update(f"New contribution from {user.username}")

    def broadcast_update(self, message: str) -> None:
        if self.real_time:
            self.real_time.broadcast_update(self, message)
        else:
            raise HTTPException(
                status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
                detail="Real-time service is currently unavailable."
            )

    def evaluate_contribution_with_ai(self, contribution: Contribution) -> float:
        if self.ai_scoring:
            return self.ai_scoring.evaluate_contribution(contribution.content)
        else:
            raise HTTPException(
                status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
                detail="AI scoring service is currently unavailable."
            )

    def get_all_contributions(self) -> Dict[int, List[Contribution]]:
        return self.contributions
