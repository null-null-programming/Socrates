## rankings.py
from typing import Dict
from pydantic import BaseModel
from .user import UserInDB  # Import UserInDB class from user module

class Rankings(BaseModel):
    user_scores: Dict[int, float] = {}

    def update_rankings(self, user: UserInDB, score: float) -> None:
        """
        Update the rankings with the new score for the given user.
        If the user does not exist in the rankings, they will be added.
        If the score is negative, it will be subtracted from the current score.
        """
        if user.id in self.user_scores:
            # Check if the score is negative and subtract it if so
            if score < 0:
                self.user_scores[user.id] = max(0, self.user_scores[user.id] + score)
            else:
                self.user_scores[user.id] += score
        else:
            self.user_scores[user.id] = score

    def get_rankings(self) -> Dict[int, float]:
        """
        Retrieve the rankings of users.
        Returns a dictionary with user IDs as keys and scores as values,
        sorted by score in descending order.
        """
        return dict(sorted(self.user_scores.items(), key=lambda item: item[1], reverse=True))
