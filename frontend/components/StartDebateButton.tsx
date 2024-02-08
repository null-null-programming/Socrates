import { useAuth } from "@/context/auth";
import { db, functions } from "@/lib/firebase";
import "firebase/firestore";
import { doc, onSnapshot } from "firebase/firestore";
import { httpsCallable } from "firebase/functions";
import { useRouter } from "next/router";
import { useState } from "react";

const StartDebateButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const user = useAuth();
  const userId = user?.id;

  const handleStartDebate = async () => {
    setIsLoading(true); // ローディング状態を開始

    try {
      if (!userId) {
        alert("ログインしてください。");
        setIsLoading(false);
        return;
      }

      // Firebase Function の呼び出し
      const enqueueUser = httpsCallable(functions, "enqueueUser");
      const result = await enqueueUser({ user_id: userId });

      if (result.data.status !== "queued") {
        throw new Error("Failed to start new session");
      }

      // 成功した場合、Firebase Firestore のリスナーを設定
      const userDocRef = doc(db, "users", userId);
      const unsubscribe = onSnapshot(userDocRef, (doc) => {
        const data = doc.data();
        if (data && data.sessionId) {
          unsubscribe(); // サブスクリプションのキャンセル
          setIsLoading(false); // ローディング状態を終了
          router.push(`/session/${data.sessionId}`); // セッションページへの遷移
        }
      });
    } catch (error) {
      console.error("Error starting debate:", error);
      alert("ディベートを開始できませんでした。");
      setIsLoading(false); // ローディング状態を終了
    }
  };

  return (
    <>
      <button
        className={`border border-[#F0E3E3] bg-[#191825] text-[#F0E3E3] font-bold py-2 px-4 rounded transition-colors`}
        onClick={handleStartDebate}
        disabled={isLoading}
      >
        Start Debate
      </button>

      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
    </>
  );
};

export default StartDebateButton;
