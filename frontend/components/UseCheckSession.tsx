import { doc, onSnapshot, runTransaction } from "@firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../lib/firebase";

const useCheckSession = (userId) => {
  const [sessionId, setSessionId] = useState(null);
  const router = useRouter();

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
      // トランザクションを使用して複数の操作を同時に行う
      await runTransaction(db, async (transaction) => {
        // ユーザードキュメントからsessionIdを削除
        transaction.update(userRef, { sessionId: null });

        // セッションドキュメントを非アクティブに設定
        transaction.update(sessionRef, { isActive: false });
      });

      console.log("セッションから正常に抜けました。");
    } catch (error) {
      console.error("セッションから抜ける際にエラーが発生しました:", error);
    }
  };

  // ページ遷移を監視
  useEffect(() => {
    const handleRouteChange = async (url) => {
      if (sessionId && !url.includes(`/session/${sessionId}`)) {
        const leaveSessionConfirmation = confirm("セッションから抜けますか？");
        if (leaveSessionConfirmation) {
          // ユーザーが「Yes」を選択した場合、セッションをクリーンアップする処理を呼び出す
          await leaveSession(userId, sessionId);
        } else {
          // 「No」を選択した場合、セッションページにリダイレクトする
          router.push(`/session/${sessionId}`);
        }
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [sessionId, router]);
};

export default useCheckSession;
