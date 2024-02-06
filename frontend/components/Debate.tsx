//debate.tsx
// src/components/Debate.tsx
import Navbar from "@/components/Navbar";
import { useAuth } from "@/context/auth"; // 認証コンテキストフック
import { db } from "@/lib/firebase"; // Firebase設定のインポートパスを確認してください
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useRef, useState } from "react";

interface ChatItem {
  id: string;
  text: string;
  senderId: string;
  senderName: string;
  isChat: boolean;
}

interface DebateProps {
  sessionId: string;
  sessionState: {
    currentTurn: string;
    round: number;
    messages: ChatItem[];
    participants: string[];
  };
}

const Debate = ({ sessionId }: DebateProps) => {
  const [message, setMessage] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<ChatItem[]>([]);
  const endOfMessagesRef = useRef<HTMLDivElement | null>(null);
  const user = useAuth();

  useEffect(() => {
    // ディベートメッセージのリアルタイム購読をセットアップ
    const messagesRef = collection(db, "sessions", sessionId, "debate");
    const q = query(messagesRef, orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const updatedMessages: ChatItem[] = [];
      querySnapshot.forEach((doc) => {
        updatedMessages.push({ id: doc.id, ...doc.data() } as ChatItem);
      });
      setChatHistory(updatedMessages);
    });

    return () => unsubscribe(); // コンポーネントのクリーンアップで購読解除
  }, [sessionId, user]);

  useEffect(() => {
    // 新しいメッセージが追加されたときにスクロール
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  const sendMessage = async () => {
    if (!user || !user.id) {
      alert("ログインしてください。");
      return;
    }

    // 新しいメッセージをデータベースに追加
    try {
      await addDoc(collection(db, "sessions", sessionId, "debate"), {
        text: message,
        senderId: user.id,
        senderName: user.name || "匿名",
        isChat: true,
        timestamp: new Date(),
      });
      setMessage(""); // 送信後にメッセージ入力フィールドをクリア
    } catch (error) {
      console.error("メッセージの送信に失敗しました。", error);
      alert("メッセージの送信に失敗しました。");
    }
  };

  return (
    <div>
      <div className="mx-auto pt-8 px-4 min-h-screen text-white">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="w-full mb-4 overflow-auto">
            {chatHistory.map((chatItem) => (
              <div className="py-3" key={chatItem.id}>
                <div
                  className={`flex border p-2 mb-2 w-full text-white ${
                    chatItem.senderId === user?.id
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
