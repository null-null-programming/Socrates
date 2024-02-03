// StartDebateButton.tsx
import { useRouter } from "next/router";

const StartDebateButton = () => {
  const router = useRouter();

  const handleStartDebate = async () => {
    try {
      // 新しいセッションを作成するAPI呼び出し
      const res = await fetch("http://localhost:8000/start_session", {
        method: "POST",
      });
      if (!res.ok) {
        throw new Error("Failed to start new session");
      }
      const { session_id } = await res.json();

      // セッションIDをURLパラメータに含めて、ディベートページに遷移
      router.push(`/debate/${session_id}`);
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
