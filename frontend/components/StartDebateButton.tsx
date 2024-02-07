import { useAuth } from "@/context/auth";
import { db, functions } from "@/lib/firebase";
import "firebase/firestore";
import { doc, onSnapshot } from "firebase/firestore";
import { httpsCallable } from "firebase/functions";
import { useRouter } from "next/router";

const StartDebateButton = () => {
  const router = useRouter();
  const user = useAuth();
  const userId = user?.id;

  const handleStartDebate = async () => {
    try {
      if (!userId) {
        alert("ログインしてください。");
        return;
      }

      // Firebase Functionの呼び出しに変更
      const enqueueUser = httpsCallable(functions, "enqueueUser");

      const result = await enqueueUser({ user_id: userId });

      // 結果のハンドリング（resultから必要なデータを取り出す）
      if (result.data.status !== "queued") {
        throw new Error("Failed to start new session");
      }

      // 成功した場合、Firebase Firestoreのリスナーを設定
      const userDocRef = doc(db, "users", userId);
      const unsubscribe = onSnapshot(userDocRef, (doc) => {
        const data = doc.data();
        if (data && data.sessionId) {
          unsubscribe(); // サブスクリプションのキャンセル
          router.push(`/session/${data.sessionId}`); // セッションページへの遷移
        }
      });
    } catch (error) {
      console.error("Error starting debate:", error);
      alert("ディベートを開始できませんでした。");
    }
  };

  return (
    <button
      className="inline-block border border-[#F0E3E3] bg-[#191825] text-[#F0E3E3] font-bold py-2 px-4 rounded hover:bg-[#FF6969] hover:border-[#FF6969] transition-colors hover:text-[#F0E3E3]"
      onClick={handleStartDebate}
    >
      Start Debate
    </button>
  );
};

export default StartDebateButton;
