// コンポーネントとフックのインポートはそのままに保持
import Navbar from "@/components/Navbar";
import { useAuth } from "@/context/auth";
import { db } from "@/lib/firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useRouter } from "next/router";
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

const MAX_TIME = 30; // 5min
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
  const [isLoading, setIsLoading] = useState(false);

  const [userRemainingCharacters, setUserRemainingCharacters] =
    useState(MAX_CHARACTERS);

  const router = useRouter();

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

  useEffect(() => {
    // セッションのドキュメントからstartTimeを取得
    const getSessionStartTime = async () => {
      const sessionRef = doc(db, "sessions", sessionId);
      const sessionSnap = await getDoc(sessionRef);

      if (sessionSnap.exists()) {
        const sessionData = sessionSnap.data();
        const startTime = sessionData.startTime.toDate(); // FirebaseのTimestampをDateオブジェクトに変換
        const now = new Date();

        // 現在時刻とstartTimeの差（ミリ秒）を算出
        const timeDiff = now.getTime() - startTime.getTime();

        // 差分（ミリ秒）を秒に変換し、MAX_TIMEから引いた値を設定
        let newRemainingTime = MAX_TIME - Math.floor(timeDiff / 1000);

        // 残り時間が負の数にならないようにチェック
        newRemainingTime = newRemainingTime > 0 ? newRemainingTime : 0;
        setRemainingTime(newRemainingTime);
      } else {
        console.log("No such session!");
      }
    };

    getSessionStartTime();
  }, [sessionId]);

  useEffect(() => {
    // chatHistoryの最後のメッセージを確認
    const lastMessage = chatHistory[chatHistory.length - 1];

    // 最後のメッセージが存在し、そのsenderNameが'system'である場合、
    // ローディングを終了する（isLoadingをfalseに設定）
    if (lastMessage && lastMessage.senderName === "system") {
      setIsLoading(false);
    }
  }, [chatHistory]);

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
      isChat: true,
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
      const lastDebateMessage = chatHistory
        .filter((item) => !item.isChat)
        .pop();

      const hasEnded = chatHistory.filter((item) => item.isChat).pop();

      console.log(hasEnded);

      if (!lastDebateMessage) {
        router.push("/");
        return;
      }

      if (hasEnded) {
        return;
      }

      setIsLoading(true);

      if (lastDebateMessage && lastDebateMessage.senderId === user?.id) {
        evaluateDebate();
      }
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
                <h2 className="text-5xl apply-font">Debate Messages</h2>
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
                <div className=" text-white p-4 rounded-lg shadow-lg flex items-center justify-between">
                  <div>
                    {remainingTime > 0 && (
                      <>
                        <h2 className="text-5xl font-semibold apply-font">
                          Information
                        </h2>
                        <p className="text-xl font-bold flex items-center japanese-font">
                          <i className="fas fa-characters mr-2"></i>残り文字数:{" "}
                          {userRemainingCharacters}文字
                        </p>
                        <p className="text-xl font-bold flex items-center japanese-font">
                          <i className="fas fa-hourglass-end mr-2"></i>残り時間:{" "}
                          {formatTime(remainingTime)}
                        </p>
                      </>
                    )}
                    {chatHistory
                      .filter((item) => item.isChat)
                      .map((item) => (
                        <div key={item.id}>
                          <h1 className="text-8xl apply-font">RESULT</h1>
                          <pre className="p-2 rounded my-2 text-white whitespace-pre-wrap bg-[#191825] border border-[#EBF400]">
                            {item.text}
                          </pre>
                        </div>
                      ))}
                  </div>
                </div>
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
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
    </div>
  );
};

export default Debate;
