import { useAuth } from "@/context/auth";
import { db } from "@/lib/firebase";
import "firebase/firestore";
import { doc, onSnapshot } from "firebase/firestore";
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
      const res = await fetch("http://localhost:8000/enqueue", {
        method: "POST",
        body: JSON.stringify({ user_id: userId }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to start new session");
      }

      const userDocRef = doc(db, "users", userId);
      const unsubscribe = onSnapshot(userDocRef, (doc) => {
        const data = doc.data();
        if (data && data.sessionId) {
          router.push(`/session/${data.sessionId}`);
          unsubscribe();
        }
      });
    } catch (error) {
      console.error(error);
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
