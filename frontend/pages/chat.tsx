import { useEffect, useRef, useState } from "react";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const endOfMessagesRef = useRef(null);

  // チャット履歴が更新されるたびにスクロールする
  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory]);

  const sendMessage = async () => {
    const newMessage = {
      id: chatHistory.length,
      text: message,
      sender: "Me",
    };
    // メッセージをチャット履歴に追加
    setChatHistory((prevHistory) => [...prevHistory, newMessage]);

    // APIリクエストを送信し、レスポンスを待つ
    const res = await fetch("http://localhost:8000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();

    // レスポンスをチャット履歴に追加
    const newResponse = {
      id: chatHistory.length + 1,
      text: data.reply,
      sender: "Opponent",
    };

    setChatHistory((prevHistory) => [...prevHistory, newResponse]);
    // メッセージ入力フィールドをクリア
    setMessage("");
  };

  return (
    <div className="bg-[#191825]">
      <div className="mx-auto max-w-6xl pt-8 px-4 min-h-screen text-white">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="w-full mb-4 overflow-auto">
            {chatHistory.map((chatItem) => (
              <div className="py-3">
                <div
                  key={chatItem.id}
                  className={`flex border p-2 mb-2 w-full text-white ${
                    chatItem.sender === "Me"
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

export default Chat;
