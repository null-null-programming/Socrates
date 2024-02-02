import { useState } from "react";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    const res = await fetch("http://localhost:8000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();
    setResponse(data.reply);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <textarea
        className="border border-gray-400 p-2"
        rows={4}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white font-bold"
        onClick={sendMessage}
      >
        送信
      </button>
      {response && <p className="mt-4">返信: {response}</p>}
    </div>
  );
};

export default Chat;
