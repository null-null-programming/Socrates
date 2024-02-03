//debate.tsx
import { useEffect, useRef, useState } from "react";
import { fetchCurrentSessionState } from "../lib/fetchCurrentSessionState";

interface DebateProps {
  sessionId: string;
}

const Debate = ({ sessionId }: DebateProps) => {
  // 正しいpropsの受け取り方
  const [message, setMessage] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<any[]>([]);
  const endOfMessagesRef = useRef<HTMLDivElement | null>(null);

  // chatHistoryが更新されたときに実行する
  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory]);

  // 送信ボタンを押した時の処理
  const sendMessage = async () => {
    // 現在のセッション状態を取得
    const sessionState = await fetchCurrentSessionState(sessionId);
    if (sessionState.current_turn !== "A") {
      alert("今はあなたのターンではありません。もう少しお待ちください。");
      return;
    }

    // メッセージ送信の処理
    const newMessage = {
      text: message,
      sender: "A", // ここは動的に変えられるようにする必要があるかも
    };
    setChatHistory([...chatHistory, newMessage]);

    // メッセージをサーバー側に送信
    const res = await fetch(`http://localhost:8000/debate/${sessionId}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMessage),
    });

    if (!res.ok) {
      const error = await res.json();
      alert(error.detail);
      return;
    }

    const data = await res.json();
    const newResponse = { text: data.reply };
    setChatHistory([...chatHistory, newResponse]);
    setMessage(""); // メッセージ入力フィールドをクリア
  };

  return (
    <div className="bg-[#191825]">
      <div className="mx-auto max-w-6xl pt-8 px-4 min-h-screen text-white">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="w-full mb-4 overflow-auto">
            {chatHistory.map((chatItem) => (
              <div className="py-3" key={chatItem.id}>
                <div
                  className={`flex border p-2 mb-2 w-full text-white ${
                    chatItem.sender === "A"
                      ? "border-[#F0E3E3]"
                      : "border-[#2F576E]"
                  }`}
                  style={{ animation: `fadeIn 2s forwards` }}
                >
                  <div className="w-full">
                    <p>{chatItem.text}</p>
                  </div>
                </div>
              </div>
            ))}
            <div ref={endOfMessagesRef} />
          </div>
          <b className="py-8"></b>
          <div className="w-full mb-4">
            <textarea
              className="border bg-[#191825] border-[#F0E3E3] p-4 text-white w-full"
              rows={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your thoughts..."
            ></textarea>
            <div className="flex justify-end w-full mb-4">
              <button
                className="mt-4 px-6 py-3 border border-[#FF6969] text-white font-bold rounded-lg shadow-lg hover:bg-[#FF6969] transition duration-300 ease-in-out"
                onClick={sendMessage}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Debate;
