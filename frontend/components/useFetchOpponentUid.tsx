import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const useFetchOpponentUid = (sessionId, myUid) => {
  const [opponentUid, setOpponentUid] = useState(null);

  useEffect(() => {
    const fetchSessionData = async () => {
      // セッションのドキュメント参照を取得
      const sessionRef = doc(db, "sessions", sessionId);

      try {
        // セッションドキュメントからデータを取得
        const docSnap = await getDoc(sessionRef);

        if (docSnap.exists()) {
          const sessionData = docSnap.data();

          // 例: sessionDataにparticipantsというフィールドがあり、
          // それが参加者UIDの配列を含んでいると仮定
          const participants = sessionData.participants;

          // 自分のUID以外の参加者のUIDを取得
          const opponentUid = participants.find((uid) => uid !== myUid);

          setOpponentUid(opponentUid);
        } else {
          console.log("No such session!");
        }
      } catch (error) {
        console.error("Failed to fetch session data:", error);
      }
    };

    if (sessionId && myUid) {
      fetchSessionData();
    }
  }, [sessionId, myUid]);

  return opponentUid;
};

export default useFetchOpponentUid;
