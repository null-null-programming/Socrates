// コンポーネントとフックのインポートはそのままに保持
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
import { httpsCallable } from "firebase/functions";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/auth";
import fetchUserData from "../lib/fetchUserInfo";
import { db, functions } from "../lib/firebase";
import useCheckMyPosition from "./useCheckMyPosition";
import useFetchOpponentUid from "./useFetchOpponentUid";

// ChatItem インターフェイスはそのままに保持
interface ChatItem {
  id: string;
  text: string;
  senderId: string;
  senderName: string;
  senderImgUrl: string;
  isChat: boolean;
  isProponent: boolean;
  timestamp: any;
}

const MAX_TIME = 300; // 5min
const MAX_CHARACTERS = 500;

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
  const [userData, setUserData] = useState({
    user_name: "Anonymous",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/socrates-413218.appspot.com/o/util%2Fanonymous.png?alt=media&token=b433ffba-46b8-47cb-8699-6c2780814c34",
    rate: 1500,
  });
  const { user, token } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [topic, setTopic] = useState(null);

  const [userRemainingCharacters, setUserRemainingCharacters] =
    useState(MAX_CHARACTERS);

  const isProponent = useCheckMyPosition(sessionId, user?.id);
  const opponentUid = useFetchOpponentUid(sessionId, user?.id);
  const [resultTriggered, setResultTriggered] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (!user) return;
    const getTopicBySessionId = async () => {
      const sessionRef = doc(db, "sessions", sessionId);

      try {
        const sessionSnap = await getDoc(sessionRef);

        if (sessionSnap.exists()) {
          const topic = sessionSnap.data().topic;
          setTopic(topic);
        } else {
          console.log("No such session!");
        }
      } catch (error) {
        console.error("Error getting session topic:", error);
      }
    };

    getTopicBySessionId();
  }, [sessionId, user]);

  useEffect(() => {
    if (user) {
      // user.idが利用可能な場合のみfetchUserDataを呼び出す
      const fetchAndSetUserData = async () => {
        const fetchedUserData = await fetchUserData(user.id);
        if (fetchedUserData) {
          setUserData(fetchedUserData);
        }
      };

      fetchAndSetUserData();
    }
  }, [user]);

  const updateRemainingCharacters = useCallback(() => {
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
  }, [chatHistory, user?.id]);

  useEffect(() => {
    if (!user) return;
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
  }, [sessionId, user]);

  useEffect(() => {
    if (!user) return;
    // chatHistoryの最後のメッセージを確認
    const lastMessage = chatHistory[chatHistory.length - 1];

    // 最後のメッセージが存在し、そのsenderNameが'system'である場合、
    // ローディングを終了する（isLoadingをfalseに設定）
    if (lastMessage && lastMessage.senderName === "system") {
      setIsLoading(false);
    }
  }, [chatHistory, user]);

  // chatHistory または debateMessage が変更されるたびに、文字数と時間を更新
  useEffect(() => {
    if (!user) return;
    updateRemainingCharacters();
  }, [chatHistory, debateMessage, user, updateRemainingCharacters]);

  useEffect(() => {
    let unsubscribe = () => {}; // クリーンアップ関数用の変数を初期化

    if (user && resultTriggered) {
      const userDocRef = doc(db, "users", user.id);
      unsubscribe = onSnapshot(userDocRef, async (doc) => {
        if (doc.exists()) {
          const updatedUserData = doc.data();
          // レートの変更があった場合（初期状態の監視も含む）
          if (
            userData &&
            updatedUserData &&
            updatedUserData.rate !== userData.rate
          ) {
            // レート変更の通知メッセージを作成
            let rateChangeText = `${userData.user_name} : `;

            if (userData.rate < updatedUserData.rate) {
              rateChangeText += "WIN\n";
            } else if (userData.rate == updatedUserData.rate) {
              rateChangeText += "DRAW\n";
            } else {
              rateChangeText += "LOSE\n";
            }

            rateChangeText += `Rating update: ${userData.rate} -> ${updatedUserData.rate}`;

            // メッセージをsessionsのdebateコレクションに追加
            const messageItem = {
              senderId: "result",
              senderName: "result",
              isChat: true,
              text: rateChangeText,
              timestamp: serverTimestamp(),
            };

            try {
              await addDoc(
                collection(db, "sessions", sessionId, "debate"),
                messageItem
              );
            } catch (error) {
              console.error(
                "Failed to add rate change message to the debate history",
                error
              );
            }
          }
        }
      });
    }

    return () => unsubscribe(); // コンポーネントのクリーンアップ時にリスナーを解除
  }, [user, userData, sessionId, resultTriggered]);

  useEffect(() => {
    if (!user) return;
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
  }, [user]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  // メッセージ読み込みの useEffect はそのままに保持
  useEffect(() => {
    if (!user) return;
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
  }, [sessionId, user]);

  const analyzeAndSaveEvaluationResult = useCallback(
    async (json) => {
      const data = json["result"];

      let EvalHistory: any = [];
      let text = "";
      for (const [userName, scores] of Object.entries(data)) {
        if (userName === "round") continue;
        text += `UserName: ${userName}\n\n`;
        if (scores) {
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
            senderImgUrl: null,
            isChat: true,
            text: text,
            isProponent: null,
            timestamp: serverTimestamp(),
          });
          text = "";
        }
      }

      // Firestoreデータベースに結果を保存
      const promises = EvalHistory.map((item) =>
        addDoc(collection(db, "sessions", sessionId, "debate"), item)
      );
      await Promise.all(promises);

      //debateMessage.push({ senderName: "system", text: text });
    },
    [sessionId]
  );

  const evaluateDebate = useCallback(async () => {
    const debateMessages = chatHistory.filter((item) => !item.isChat);
    const debateString = debateMessages
      .map((item) => {
        const positionText = item.isProponent ? "(賛成派)" : "(反対派)";
        return `${item.senderName} ${positionText} : ${item.text}\n`;
      })
      .join("");

    // Firebase FunctionsのhttpsCallableを使用して関数を呼び出す
    const evaluateDebateFunction = httpsCallable(functions, "evaluateDebate", {
      timeout: 550000,
    });

    try {
      const { data } = await evaluateDebateFunction({
        debate: debateString,
        my_debater_name: userData.user_name,
        opponent_uid: opponentUid,
      });

      analyzeAndSaveEvaluationResult(data);
    } catch (error) {
      console.error("Evaluation failed:", error);
      alert("Failed to perform evaluation");
    }
  }, [
    analyzeAndSaveEvaluationResult,
    chatHistory,
    opponentUid,
    userData.user_name,
  ]);

  useEffect(() => {
    if (!user) return;
    if (remainingTime === 0) {
      const lastDebateMessage = chatHistory
        .filter((item) => !item.isChat)
        .pop();

      setResultTriggered(true);

      const hasEnded = chatHistory
        .filter((item) => item.isChat && item.senderName == "system")
        .pop();

      console.log(hasEnded, "hasEnded");

      if (!lastDebateMessage) {
        router.push("/");
        return;
      }

      if (hasEnded) {
        setResultTriggered(false);
        return;
      }

      setIsLoading(true);

      if (lastDebateMessage && lastDebateMessage.senderId === user?.id) {
        evaluateDebate();
      }
    }
  }, [remainingTime, user, chatHistory, evaluateDebate, router]);

  const sendMessage = async (isDebateMessage: boolean) => {
    if (!user) {
      alert("ログインしてください。");
      return;
    }

    if (userRemainingCharacters <= 0) {
      alert("文字数が制限を超えたので送信できません。");
      return;
    }

    try {
      const message = isDebateMessage ? debateMessage : chatMessage;
      if (!message.trim()) return; // 空のメッセージは送信しない

      await addDoc(collection(db, "sessions", sessionId, "debate"), {
        text: message,
        senderId: user.id,
        senderName: userData.user_name || "Anonymous",
        senderImgUrl:
          userData.imgUrl ||
          "https://firebasestorage.googleapis.com/v0/b/socrates-413218.appspot.com/o/util%2Fanonymous.png?alt=media&token=b433ffba-46b8-47cb-8699-6c2780814c34",
        isChat: false,
        isProponent: isProponent,
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
    <div className="flex md:hidden justify-around p-4 apply-font text-4xl">
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
        Info
      </button>
    </div>
  );

  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === "Enter") {
      e.preventDefault(); // デフォルトのイベントを防止
      sendMessage(true);
    }
  };

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
                <h2 className="text-5xl apply-font">Messages</h2>
                {window.innerWidth < 768 && (
                  <p className="text-xl font-bold flex items-center japanese-font">
                    {topic}
                    <br />
                    <br />
                    あなたは {isProponent ? "賛成派" : "反対派"}{" "}
                    の意見を述べてください。
                  </p>
                )}
                <div className="h-full">
                  {chatHistory
                    .filter((item) => !item.isChat)
                    .map((item) => (
                      <div key={item.id} className="py-3">
                        <div className="flex item-center">
                          <Image
                            src={item.senderImgUrl}
                            alt="sender image"
                            width={100}
                            height={100}
                          />
                          <h1 className="p-6">{item.senderName}</h1>
                        </div>
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
                        <div className="p-6">
                          <h2 className="text-5xl font-semibold apply-font">
                            Topic
                          </h2>
                          <p className="text-xl font-bold flex items-center japanese-font">
                            {topic}
                          </p>
                        </div>
                        <div className="p-6">
                          <h2 className="text-5xl font-semibold apply-font">
                            Position
                          </h2>
                          <p className="text-xl font-bold flex items-center japanese-font">
                            あなたは {isProponent ? "賛成派" : "反対派"}{" "}
                            の意見を述べてください。
                          </p>
                        </div>
                        <div className="p-6">
                          <h2 className="text-5xl font-semibold apply-font">
                            Information
                          </h2>
                          <p className="text-xl font-bold flex items-center japanese-font">
                            <i className="fas fa-characters mr-2"></i>
                            残り文字数: {userRemainingCharacters}文字
                          </p>
                          <p className="text-xl font-bold flex items-center japanese-font">
                            <i className="fas fa-hourglass-end mr-2"></i>
                            残り時間: {formatTime(remainingTime)}
                          </p>
                        </div>
                      </>
                    )}
                    {remainingTime === 0 && (
                      <div>
                        <h1 className="text-5xl apply-font">RESULT</h1>
                        {chatHistory
                          .filter((item) => item.isChat)
                          .map((item) => (
                            <div key={item.id} className="p-2">
                              <pre className="p-2 rounded my-2 text-white whitespace-pre-wrap bg-[#191825] border border-[#EBF400]">
                                {item.text}
                              </pre>
                            </div>
                          ))}
                      </div>
                    )}
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
                onChange={(e) => {
                  const input = e.target.value;
                  if (input.length > userRemainingCharacters) {
                    setDebateMessage(input.slice(0, userRemainingCharacters));
                  } else {
                    setDebateMessage(input);
                  }
                }}
                onKeyDown={handleKeyDown}
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
