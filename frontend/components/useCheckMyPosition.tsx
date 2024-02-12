import { db } from "@/lib/firebase"; // Firebaseの設定に応じてパスを調整
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

// 自分の立場（賛成か反対か）を確認するカスタムフック
const useCheckMyPosition = (sessionId, myId) => {
  const [isProponent, setIsProponent] = useState(null); // nullは未確定を意味する

  useEffect(() => {
    const fetchSessionParticipants = async () => {
      const sessionRef = doc(db, "sessions", sessionId);
      try {
        const docSnap = await getDoc(sessionRef);
        if (docSnap.exists()) {
          const participants = docSnap.data().participants;
          // participants配列の最初のIDが自分のIDと一致するかチェック
          setIsProponent(participants[0] === myId);
        } else {
          console.log("No such session!");
        }
      } catch (error) {
        console.error("Error fetching session participants:", error);
      }
    };

    fetchSessionParticipants();
  }, [sessionId, myId]); // sessionIdまたはmyIdが変更された場合に再実行

  return isProponent;
};

export default useCheckMyPosition;
