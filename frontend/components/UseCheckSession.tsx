import { doc, onSnapshot, runTransaction } from "@firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { db } from "../lib/firebase";

const useCheckSession = (userId) => {
  const [sessionId, setSessionId] = useState(null);
  const router = useRouter();
  const confirmingLeave = useRef(false); // 確認中であるかどうかの状態を管理する

  useEffect(() => {
    if (!userId) return;

    const unsubscribe = onSnapshot(doc(db, "users", userId), (doc) => {
      const data = doc.data();
      setSessionId(data?.sessionId || null);
    });

    return () => unsubscribe(); // コンポーネントのアンマウント時にリスナーを解除
  }, [userId]);

  const leaveSession = async (userId, sessionId) => {
    const userRef = doc(db, "users", userId);
    const sessionRef = doc(db, "sessions", sessionId);

    try {
      await runTransaction(db, async (transaction) => {
        transaction.update(userRef, { sessionId: null });
        transaction.update(sessionRef, { isActive: false });
      });

      console.log("セッションから正常に抜けました。");
    } catch (error) {
      console.error("セッションから抜ける際にエラーが発生しました:", error);
    }
  };

  useEffect(() => {
    const handleRouteChange = async (url) => {
      // 確認中であることをチェック
      if (confirmingLeave.current) return;

      if (
        sessionId &&
        router.asPath.includes(`/session/${sessionId}`) &&
        !url.includes(`/session/${sessionId}`)
      ) {
        confirmingLeave.current = true; // 確認プロセスを開始
        const leaveSessionConfirmation = confirm("セッションから抜けますか？");
        if (leaveSessionConfirmation) {
          await leaveSession(userId, sessionId);
        } else {
          router.push(`/session/${sessionId}`);
        }
        confirmingLeave.current = false; // 確認プロセスをリセット
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [sessionId, userId, router]);

  return { sessionId };
};

export default useCheckSession;
