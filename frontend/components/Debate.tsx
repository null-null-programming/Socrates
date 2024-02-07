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
    document.body.style.overflow = "hidden";

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

  const sendMessage = async (isDebateMessage: boolean) => {
    // ログインチェック
    if (!user) {
      alert("ログインしてください。");
      return;
    }

    try {
      const message = isDebateMessage ? debateMessage : chatMessage;
      if (!message.trim()) return; // 空のメッセージは送信しない

      if (isDebateMessage) {
        const debateMessages = chatHistory.filter((item) => !item.isChat);
        const lastDebateMessage = debateMessages[debateMessages.length - 1];
        if (lastDebateMessage && lastDebateMessage.senderId === user.id) {
          alert(
            "前回のディベートメッセージの送信者が自分自身です。他の人がメッセージを送信するのを待ってください。"
          );
          return;
        }
        await addDoc(collection(db, "sessions", sessionId, "debate"), {
          text: message,
          senderId: user.id,
          senderName: user.name || "匿名",
          isChat: false,
          timestamp: serverTimestamp(),
        });
        debateMessages.push({ senderName: user.id, text: message });
        const debateString = debateMessages
          .map((item) => `${item.senderName} : ${item.text}\n`)
          .join("");

        setDebateMessage("");

        const newLength = debateMessages.length;
        let url = "";
        if ([4, 6].includes(newLength)) {
          url = `http://localhost:8000/session/${sessionId}/eval`;
        } else if (newLength === 8) {
          url = `http://localhost:8000/session/${sessionId}/final_eval`;
        }

        if (url) {
          const res = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ debate: debateString }),
          });

          if (!res.ok) {
            const error = await res.json();
            alert(error.detail);
            throw new Error("Failed to fetch session state");
          }

          const json = await res.json();
          const data = json["eval"];

          const EvalHistory = [];
          for (const [userName, scores] of Object.entries(data)) {
            if (userName === "round") continue;
            let text = `UserName: ${userName}\n\n`;
            for (const [category, details] of Object.entries(scores)) {
              if (category === "得点") {
                text += `${category}\n合計 ${details["合計"]}\n`;
              } else {
                text += `${category}\n得点 ${details["得点"]}\n該当箇所: ${details["該当箇所"]}\n\n`;
              }
            }
            EvalHistory.push({
              senderId: "system",
              senderName: "system",
              isChat: true,
              text: text,
              timestamp: serverTimestamp(),
            });
          }

          // Firestoreデータベースに結果を保存
          const promises = EvalHistory.map((item) =>
            addDoc(collection(db, "sessions", sessionId, "debate"), item)
          );
          await Promise.all(promises);

          // メッセージフィールドのクリア
          setDebateMessage("");
        }
      } else {
        await addDoc(collection(db, "sessions", sessionId, "debate"), {
          text: message,
          senderId: user.id,
          senderName: user.name || "匿名",
          isChat: true,
          timestamp: serverTimestamp(),
        });

        setChatMessage(""); // チャットメッセージ入力フィールドを空にする
      }
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
    window.innerWidth >= 768 ? "p-4 h-1/2" : "p-4 h-2/3";

  const messageContainerClass2 =
    window.innerWidth >= 768 ? "overflow-auto h-full" : "overflow-auto h-4/5";

  const messageContainerClass3 =
    window.innerWidth >= 768 ? "overflow-auto h-full" : "overflow-auto h-2/5";

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
                          <p>{item.senderName}</p>
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
                  <div className={messageContainerClass3}>
                    {chatHistory
                      .filter((item) => item.isChat)
                      .map((item) => (
                        <div key={item.id}>
                          <p>{item.senderName}</p>
                          {item.senderId === "system" ? (
                            <pre className="p-2 bg-gray-700 rounded my-2 text-white whitespace-pre-wrap">
                              {item.text}
                            </pre>
                          ) : (
                            <p className="p-2 bg-gray-700 rounded my-2 text-white whitespace-pre-wrap">
                              {item.text}
                            </p>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="fixed bottom-3 w-full">
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
