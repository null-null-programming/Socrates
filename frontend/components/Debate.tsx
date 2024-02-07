// コンポーネントとフックのインポートはそのままに保持
import Navbar from "@/components/Navbar";
import { useAuth } from "@/context/auth";
import { db } from "@/lib/firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useEffect, useRef, useState } from "react";

// ChatItem インターフェイスはそのままに保持
interface ChatItem {
  id: string;
  text: string;
  senderId: string;
  senderName: string;
  isChat: boolean;
  timestamp: any;
}

const useDisableScroll = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // スクロールの有効/無効を切り替える
    if (windowWidth <= 768) {
      document.body.style.overflow = "hidden"; // スクロールを無効にする
    } else {
      document.body.style.overflow = "hidden"; // スクロールを無効にする
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "visible"; // コンポーネントのアンマウント時にスクロールを有効に戻す
    };
  }, [windowWidth]);
};

const Debate = ({ sessionId }) => {
  useDisableScroll();
  // ステートとフックは基本的に変更なし
  const [activeTab, setActiveTab] = useState("debate");
  const [debateMessage, setDebateMessage] = useState<string>("");
  const [chatMessage, setChatMessage] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<ChatItem[]>([]);
  const endOfMessagesRef = useRef<HTMLDivElement | null>(null);
  const user = useAuth();

  // メッセージ読み込みの useEffect はそのままに保持
  useEffect(() => {
    const messagesRef = collection(db, "sessions", sessionId, "debate");
    const q = query(messagesRef, orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const updatedMessages: ChatItem[] = [];
      querySnapshot.forEach((doc) => {
        updatedMessages.push({ id: doc.id, ...doc.data() } as ChatItem);
      });
      setChatHistory(updatedMessages);
    });

    return () => unsubscribe();
  }, [sessionId]);

  // メッセージ送信機能の改善
  const sendMessage = async (isDebateMessage: boolean) => {
    // ログインチェックはそのまま
    if (!user) {
      alert("ログインしてください。");
      return;
    }

    // メッセージ送信の試行
    try {
      const message = isDebateMessage ? debateMessage : chatMessage;
      if (!message.trim()) return; // 空のメッセージは送信しない

      await addDoc(collection(db, "sessions", sessionId, "debate"), {
        text: message,
        senderId: user.id,
        senderName: user.name || "匿名",
        isChat: !isDebateMessage,
        timestamp: serverTimestamp(),
      });
      // メッセージフィールドのクリア
      isDebateMessage ? setDebateMessage("") : setChatMessage("");
    } catch (error) {
      console.error("メッセージの送信に失敗しました。", error);
      alert("メッセージの送信に失敗しました。");
    }
  };

  // レスポンシブなタブUIのレンダリング
  const renderTabSwitch = () => (
    <div className="flex md:hidden justify-around p-4">
      <button
        className={`flex-1 ${activeTab === "debate" ? "bg-red-900" : ""} p-2`}
        onClick={() => setActiveTab("debate")}
      >
        Debate
      </button>
      <button
        className={`flex-1 ${activeTab === "chat" ? "bg-green-900" : ""} p-2`}
        onClick={() => setActiveTab("chat")}
      >
        Chat
      </button>
    </div>
  );

  const messageContainerClass =
    window.innerWidth >= 768 ? "p-4 h-3/5" : "p-4 h-1/3";

  const messageContainerClass2 =
    window.innerWidth >= 768 ? "overflow-auto h-full" : "overflow-auto h-4/5";

  return (
    <div className="flex flex-col min-h-screen text-white p-1">
      <Navbar />
      {renderTabSwitch()}
      <div className="flex flex-grow position: sticky">
        <div className="flex flex-col w-full" style={{ paddingTop: "5%" }}>
          <div className="flex-grow flex md:flex-row">
            {/* タブ切り替えまたはPC表示の条件レンダリング */}
            {(activeTab === "debate" || window.innerWidth >= 768) && (
              <div className="w-full md:w-1/2 overflow-auto">
                <div className={messageContainerClass}>
                  <h2 className="text-lg font-semibold">Debate Messages</h2>
                  <div className={messageContainerClass2}>
                    {chatHistory
                      .filter((item) => !item.isChat)
                      .map((item) => (
                        <div
                          key={item.id}
                          className="p-2 bg-gray-700 rounded my-2"
                        >
                          <p>{item.text}</p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}
            {(activeTab === "chat" || window.innerWidth >= 768) && (
              <div className="w-full md:w-1/2 overflow-auto">
                <div className={messageContainerClass}>
                  <h2 className="text-lg font-semibold">Chat Messages</h2>
                  <div className="overflow-auto h-full">
                    {chatHistory
                      .filter((item) => item.isChat)
                      .map((item) => (
                        <div
                          key={item.id}
                          className="p-2 bg-gray-700 rounded my-2"
                        >
                          <p>{item.text}</p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="fixed bottom-2 w-full">
        <div className="flex flex-wrap">
          {/* ディベートメッセージ入力エリア */}
          {(activeTab === "debate" || window.innerWidth >= 768) && (
            <div className="w-full md:w-1/2 p-5">
              <textarea
                className="border bg-[#191825] border-[#F0E3E3] p-4 text-white w-full h-60"
                placeholder="Your debate message"
                value={debateMessage}
                onChange={(e) => setDebateMessage(e.target.value)}
              ></textarea>
              <button
                className="mt-4 px-6 py-3 border border-[#FF6969] text-white font-bold rounded-lg shadow-lg hover:bg-[#FF6969] transition duration-300 ease-in-out"
                onClick={() => sendMessage(true)}
              >
                Send Debate
              </button>
            </div>
          )}
          {/* チャットメッセージ入力エリア */}
          {(activeTab === "chat" || window.innerWidth >= 768) && (
            <div className="w-full md:w-1/2 p-5">
              <textarea
                className="border bg-[#191825] border-[#F0E3E3] p-4 text-white w-full h-60"
                placeholder="Your chat message"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
              ></textarea>
              <button
                className="mt-4 px-6 py-3 border border-[#FF6969] text-white font-bold rounded-lg shadow-lg hover:bg-[#FF6969] transition duration-300 ease-in-out"
                onClick={() => sendMessage(false)}
              >
                Send Chat
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Debate;
