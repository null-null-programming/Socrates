import os
import json
from dotenv import load_dotenv
from openai import OpenAI
from .instructions.scoring import scoring_instructions


class Completions:
    def __init__(self) -> None:
        load_dotenv()

        self.scoring_instructions = [
            {"role": "system", "content": scoring_instructions}
        ]

        self.client = OpenAI(
            base_url=os.getenv("BASE_URL"),
            api_key=os.getenv("API_KEY"),
        )

    def get_eval_result(self, message: str):
        send_debate = self.scoring_instructions + [{"role": "user", "content": message}]

        response = self.client.chat.completions.create(
            model=os.getenv("MODEL_NAME"),
            messages=send_debate,
            response_format={"type": "json_object"},  # gpt-4 only
            temperature=0.0,
        )

        json_data = json.loads(response.choices[0].message.content)

        got_message = json_data["eval"]

        if got_message is None:
            raise TypeError("Received message is not a string")

        return got_message


if __name__ == "__main__":
    print("Test\n")

    test = """
        Alice: ベーシックインカムは経済的自由を実現する最も効果的な手段だ。貧困問題を根本から解決し、人々に選択の自由を与える。反対する理由があるなら聞かせてもらおうか。

        Bob: 効果的？笑わせるな。ベーシックインカムの資金調達はどうするんだ？高額な税金を課すことになる。それは経済に重大な負担をかけ、人々の労働意欲を削ぐだけだ。

        Alice: 負担？労働意欲？それは短絡的な見方だ。長期的に見れば、ベーシックインカムは消費を促進し、経済活動を刺激する。それにより生まれる経済成長が資金をカバーする。理解していないのはお前の方だ。

        Bob: 経済成長が資金をカバーする？根拠のない楽観論に過ぎない。実際には、無駄遣いと財政赤字の増大を招くだけだ。効率的な社会保障制度を構築する方がずっと現実的だ。
    """

    result = Completions().get_eval_result(test)
    print(result)
    print(type(result))
