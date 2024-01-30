from pydantic import BaseModel
from typing import Any, Dict
from fastapi import HTTPException, status
import openai
import os

openai.api_key = os.environ.get("OPENAI_API_KEY")


class AIScoring(BaseModel):
    # Configuration for the AI scoring system, with default values

    def __init__(self):
        pass

    def evaluate_with_gpt4(prompt: str) -> str:
        """
        Evaluate the quality of a debate contribution using an AI model.
        """
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=prompt,
            temperature=0.7,
            max_tokens=150,
            top_p=1.0,
            frequency_penalty=0.0,
            presence_penalty=0.0,
        )
        return response.choices[0].text.strip()

    def evaluate_contribution(self, contribution: str) -> float:
        """
        Evaluate the quality of a debate contribution using an AI model.

        Parameters:
        - contribution (str): The text content of the debate contribution.

        Returns:
        - float: The AI-evaluated score of the contribution.
        """
        if not contribution:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Contribution content cannot be empty for evaluation.",
            )

        try:
            input_text = f"""
            This is a debate contribution.
            Please evaluate it on a scale of 0 to 1.
            Please send me only the score, not the text.
            contribution: {contribution}
            """
            score = float(evaluate_with_gpt4(input_text))
            print(f"LLM score: {score}")
            return score

        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail=f"AI scoring failed: {str(e)}",
            )


# Example usage:
# ai_scoring = AIScoring(model_config={"model_name": "your_model_name"})
# score = ai_scoring.evaluate_contribution("This is a debate contribution.")
