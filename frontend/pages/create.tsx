import { useAuth } from "@/context/auth";
import { db, functions } from "@/lib/firebase";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import { httpsCallable } from "firebase/functions";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const IndexPage = () => {
  const [textareaHeight, setTextareaHeight] = useState("100px");
  const [isLoading, setIsLoading] = useState(false);
  const [topic, setTopic] = useState("");
  const router = useRouter();
  const user = useAuth();
  const userId = user?.id;

  useEffect(() => {
    // クライアントサイドでのみ実行するため、確認が必要
    if (typeof window !== "undefined") {
      const height = window.innerHeight / 7;
      setTextareaHeight(`${height}px`);
    }
  }, []);

  useEffect(() => {
    if (!user) {
      alert("ログインしてください。");
      router.push("/");
      return;
    }

    const unsubscribe = onSnapshot(doc(db, "users", userId), (doc) => {
      const data = doc.data();
      // セッションIDがnullまたは未定義でない場合、ローディング状態をtrueに設定します。
      // そうでない場合、falseに設定します。
      setIsLoading(!!data?.sessionId);

      if (data?.sessionId) {
        // セッションIDが存在する場合、セッションページにリダイレクトする処理（既存のコード）
        //router.push(`/session/${data.sessionId}`);
      }
    });

    return () => unsubscribe(); // コンポーネントがアンマウントされる時にリスナーを解除
  }, [userId, router]);

  const deleteWaitingList = async (userId) => {
    if (!userId) {
      alert("ログインしてください。");
      return;
    }

    try {
      // 削除対象の待機リストエントリを確認
      const waitingListRef = collection(db, "waiting_list");
      const q = query(waitingListRef, where("userId", "==", userId));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // ユーザーが待機リストに存在する場合、確認ダイアログを表示
        const confirmDelete = confirm(
          "過去に作ったルームが存在します。消去しますか？"
        );

        if (confirmDelete) {
          // ユーザーが 'Yes' を選択した場合、該当ドキュメントを削除
          const batch = writeBatch(db);
          querySnapshot.forEach((docSnapshot) => {
            batch.delete(docSnapshot.ref);
          });
          await batch.commit();
          console.log("過去の待機リストエントリが削除されました。");
          return true;
        } else {
          // ユーザーが 'No' を選択した場合、処理を中断
          console.log("処理を中断しました。");
          return false;
        }
      }

      return true;
    } catch (error) {
      console.error(
        "ディベートの開始または待機リストの処理に失敗しました:",
        error
      );
      alert("エラーが発生しました。");
      return false;
    }
  };

  const handleCreateSession = async () => {
    setIsLoading(true);

    try {
      if (!user) {
        alert("ログインしてください。");
        setIsLoading(false);
        return;
      }

      if (!deleteWaitingList(user.id)) {
        setIsLoading(false);
        return;
      }

      // Firebase Function の呼び出し
      const enqueueUserFc = httpsCallable(functions, "enqueueUser");
      const result = await enqueueUserFc({ topic });

      if (result.data.status === "waiting") {
        setIsLoading(true);
        const unsubscribe = onSnapshot(doc(db, "users", user.id), (doc) => {
          const data = doc.data();
          if (data?.sessionId) {
            unsubscribe();
            router.push(`/session/${data.sessionId}`);
          }
        });
      } else if (result.data.status === "matched") {
        router.push(`/session/${result.data.session_id}`);
      }

      console.log(result);
    } catch (error) {
      console.error("ディベートの開始に失敗しました:", error);
      alert("ディベートを開始できませんでした。");
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="mx-auto max-w-6xl pt-8 px-4 min-h-screen text-outline">
        <Navbar />
        <div className="text-center p-8">
          <h2 className="text-3xl font-bold mt-8 mb-4">ルーム作成</h2>
          <ul
            className="list-disc list-inside space-y-2 mb-6 mx-auto text-xl"
            style={{ maxWidth: "800px" }}
          >
            <li>討論するお題を入力してください。</li>
            <li>お題の文字数は300文字までです。</li>
            <li>
              お題は賛成か反対かのどちらかで分けられる問いにしてください。
            </li>
          </ul>
          <div>
            <div>
              <textarea
                value={topic}
                maxLength={300}
                style={{ height: textareaHeight }}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="死刑制度に賛成か、反対か？"
                className="border bg-[#191825] border-[#F0E3E3] p-4 text-white w-full"
              />
            </div>
            <div className="p-5">
              <button
                className="border border-[#F0E3E3] bg-[#191825] text-[#F0E3E3] font-bold py-2 px-4 rounded transition-colors"
                onClick={handleCreateSession}
                disabled={isLoading || !topic.trim()}
              >
                Start Debate
              </button>
            </div>
          </div>
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

export default IndexPage;
