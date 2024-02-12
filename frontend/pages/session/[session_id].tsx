import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Debate from "../../components/Debate";
import { db } from "../../lib/firebase";

const DebatePage = () => {
  const router = useRouter();
  const sessionId = router.query.session_id as string;
  const [sessionState, setSessionState] = useState<any>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!sessionId) return;

    // セッションの基本情報を取得
    const sessionRef = doc(db, `sessions/${sessionId}`);
    getDoc(sessionRef).then((docSnapshot) => {
      if (docSnapshot.exists()) {
        setSessionState(docSnapshot.data());
      } else {
        setError("Session not found");
      }
    });

    // メッセージのリアルタイム更新をリッスン
    const q = query(
      collection(db, `sessions/${sessionId}/debate`),
      orderBy("timestamp")
    );
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        let messages: any = [];
        querySnapshot.forEach((doc) => {
          messages.push(doc.data());
        });
        setSessionState((currentState) => ({ ...currentState, messages }));
      },
      (error) => {
        setError("Failed to fetch session messages");
        console.error(error);
      }
    );

    // コンポーネントアンマウント時にリスナー解除
    return () => unsubscribe();
  }, [sessionId]);

  if (error) return <p>{error}</p>;
  if (!sessionState) return <p>Loading...</p>;

  return <Debate sessionId={sessionId} />;
};

export default DebatePage;
