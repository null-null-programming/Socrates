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
import { useEffect, useState } from "react";

// ChatItem インターフェイスはそのままに保持
interface ChatItem {
  id: string;
  text: string;
  senderId: string;
  senderName: string;
  isChat: boolean;
  timestamp: any;
}

const MAX_TIME = 3000; // 5min
const MAX_CHARACTERS = 1000;

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
  const [remainingTime, setRemainingTime] = useState(MAX_TIME);
  const user = useAuth();

  const [userRemainingCharacters, setUserRemainingCharacters] =
    useState(MAX_CHARACTERS);

  const updateRemainingCharacters = () => {
    let userTotalCharacters = 0;
    let lastUserTimestamp = null;

    chatHistory.forEach((item) => {
      // 自分の送信したメッセージだけをカウント
      if (item.senderId === user?.id && !item.isChat) {
        userTotalCharacters += item.text.length;
        lastUserTimestamp = item.timestamp;
      }
    });

    const userRemaining = MAX_CHARACTERS - userTotalCharacters;
    setUserRemainingCharacters(userRemaining > 0 ? userRemaining : 0);
  };

  // chatHistory または debateMessage が変更されるたびに、文字数と時間を更新
  useEffect(() => {
    updateRemainingCharacters();
  }, [chatHistory, debateMessage]);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

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

  const analyzeAndSaveEvaluationResult = async (json) => {
    const data = json["eval"];

    const EvalHistory = [];
    let text = "";
    for (const [userName, scores] of Object.entries(data)) {
      if (userName === "round") continue;
      text += `UserName: ${userName}\n\n`;
      for (const [category, details] of Object.entries(scores)) {
        if (category === "得点") {
          text += `${category}\n合計 ${details["合計"]}\n`;
        } else {
          text += `${category}\n得点 ${details["得点"]}\n該当箇所: ${details["該当箇所"]}\n\n`;
        }
      }
    }
    EvalHistory.push({
      senderId: "system",
      senderName: "system",
      isChat: false,
      text: text,
      timestamp: serverTimestamp(),
    });
    // Firestoreデータベースに結果を保存
    const promises = EvalHistory.map((item) =>
      addDoc(collection(db, "sessions", sessionId, "debate"), item)
    );
    await Promise.all(promises);

    //debateMessage.push({ senderName: "system", text: text });
  };

  const evaluateDebate = async () => {
    // 現在のディベートメッセージの状態を取得
    const debateMessages = chatHistory.filter((item) => !item.isChat);
    const debateString = debateMessages
      .map((item) => `${item.senderName} : ${item.text}\n`)
      .join("");

    let url = `http://localhost:8000/session/${sessionId}/eval`;

    try {
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
        throw new Error("Failed to perform evaluation");
      }

      const json = await res.json();
      analyzeAndSaveEvaluationResult(json);
    } catch (error) {
      console.error("Evaluation failed:", error);
    }
  };

  useEffect(() => {
    if (remainingTime === 0) {
      evaluateDebate();
    }
  }, [remainingTime]);

  const sendMessage = async (isDebateMessage: boolean) => {
    // ログインチェック
    if (!user) {
      alert("ログインしてください。");
      return;
    }

    try {
      const message = isDebateMessage ? debateMessage : chatMessage;
      if (!message.trim()) return; // 空のメッセージは送信しない

      await addDoc(collection(db, "sessions", sessionId, "debate"), {
        text: message,
        senderId: user.id,
        senderName: user.name || "匿名",
        isChat: false,
        timestamp: serverTimestamp(),
      });

      setDebateMessage("");
    } catch (error) {
      console.error("メッセージの送信に失敗しました。", error);
      alert("メッセージの送信に失敗しました。");
    }
  };

  // レスポンシブなタブUIのレンダリング
  const renderTabSwitch = () => (
    <div className="flex md:hidden justify-around p-4">
      <button
        className={`flex-1 ${activeTab === "debate" ? "bg-[#08D9D6]" : ""} p-2`}
        onClick={() => setActiveTab("debate")}
      >
        Debate
      </button>
      <button
        className={`flex-1 ${activeTab === "chat" ? "bg-[#FF2E63]" : ""} p-2`}
        onClick={() => setActiveTab("chat")}
      >
        Chat
      </button>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen text-white p-1">
      <Navbar />
      {renderTabSwitch()}
      <div className="flex flex-grow position: sticky">
        <div className="flex flex-col w-full" style={{ paddingTop: "5%" }}>
          <div className="flex-grow flex md:flex-row">
            {/* タブ切り替えまたはPC表示の条件レンダリング */}
            {(activeTab === "debate" || window.innerWidth >= 768) && (
              <div
                className="w-full md:w-1/2 overflow-auto"
                style={{ height: `${window.innerHeight / 2}px` }}
              >
                <h2 className="text-lg font-semibold">Debate Messages</h2>
                <div className="h-full">
                  {chatHistory
                    .filter((item) => !item.isChat)
                    .map((item) => (
                      <div key={item.id}>
                        <p>{item.senderName}</p>
                        <pre
                          className={`
                                    p-2 rounded my-2 text-white whitespace-pre-wrap bg-[#191825]
                                    ${
                                      item.senderId === user?.id
                                        ? "border border-[#08D9D6]"
                                        : "border border-[#FF2E63]"
                                    }
                                  `}
                        >
                          {item.text}
                        </pre>
                      </div>
                    ))}
                </div>
              </div>
            )}
            {(activeTab === "chat" || window.innerWidth >= 768) && (
              <div
                className="w-full md:w-1/2 overflow-auto"
                style={{ height: `${window.innerHeight / 2}px` }}
              >
                <h2 className="text-lg font-semibold">Info</h2>
                <p>Remaining characters: {userRemainingCharacters}</p>
                <p>Remaining time: {formatTime(remainingTime)}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <div className="flex flex-wrap">
          {/* ディベートメッセージ入力エリア */}
          {(activeTab === "debate" || window.innerWidth >= 768) && (
            <div className="w-full md:w-1/2 p-3">
              <textarea
                className="border bg-[#191825] border-[#08D9D6] p-4 text-white w-full"
                style={{ height: `${window.innerHeight / 7}px` }}
                placeholder="Your debate message"
                value={debateMessage}
                onChange={(e) => setDebateMessage(e.target.value)}
              ></textarea>
              <button
                className="mt-4 px-6 py-3 border border-[#08D9D6] text-white font-bold rounded-lg shadow-lg hover:bg-[#08D9D6] transition duration-300 ease-in-out"
                onClick={() => sendMessage(true)}
              >
                Send Debate
              </button>
            </div>
          )}
          {/* チャットメッセージ入力エリア */}
          {(activeTab === "chat" || window.innerWidth >= 768) && (
            <div className="w-full md:w-1/2 p-3"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Debate;
