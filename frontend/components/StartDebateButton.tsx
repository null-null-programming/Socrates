import { useAuth } from "@/context/auth";
import { db, functions } from "@/lib/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { httpsCallable } from "firebase/functions";
import { useRouter } from "next/router";
import { useState } from "react";

const StartDebateButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [topic, setTopic] = useState("");
  const router = useRouter();
  const { user } = useAuth();

  const handleStartDebate = async () => {
    setIsLoading(true);

    try {
      if (!user) {
        alert("ログインしてください。");
        setIsLoading(false);
        return;
      }

      // Firebase Function の呼び出し
      const enqueueUserFc = httpsCallable(functions, "enqueueUser");
      const result = await enqueueUserFc({ topic });

      setIsLoading(false);

      if (result.data.status === "waiting") {
        const unsubscribe = onSnapshot(doc(db, "users", user.uid), (doc) => {
          const data = doc.data();
          if (data?.sessionId) {
            unsubscribe();
            router.push(`/session/${data.sessionId}`);
          }
        });
      } else if (result.data.status === "matched") {
        router.push(`/session/${result.data.session_id}`);
      }
    } catch (error) {
      console.error("ディベートの開始に失敗しました:", error);
      alert("ディベートを開始できませんでした。");
      setIsLoading(false);
    }
  };

  return (
    <>
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="トピックを入力"
        disabled={isLoading}
      />
      <button
        className="border border-[#F0E3E3] bg-[#191825] text-[#F0E3E3] font-bold py-2 px-4 rounded transition-colors"
        onClick={handleStartDebate}
        disabled={isLoading || !topic.trim()}
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
