import { useAuth } from "@/context/auth";
import { collection, getDocs } from "firebase/firestore";
import { httpsCallable } from "firebase/functions";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { db, functions } from "../lib/firebase";

const WaitingRoomsPage = () => {
  const [waitingRooms, setWaitingRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;
    const fetchWaitingRooms = async () => {
      const waitingListRef = collection(db, "waiting_list");
      const snapshot = await getDocs(waitingListRef);
      let rooms: any = []; // Explicitly define the type of the rooms array
      snapshot.forEach((doc) => {
        if (doc.data().userId !== user?.id) {
          rooms.push({ id: doc.id, ...doc.data() });
        }
      });
      setWaitingRooms(rooms);
    };

    fetchWaitingRooms();
  }, [user]);

  const handleJoinRoom = async (roomId, topic) => {
    setIsLoading(true);
    const enqueueUserFc = httpsCallable(functions, "enqueueUser");

    try {
      console.log(roomId);
      const result: any = await enqueueUserFc({ roomId: roomId, topic: topic });

      console.log(result.data);

      // 成功したら、結果に基づいて適切なアクションを行う
      router.push(`/session/${result?.data?.session_id}`);
    } catch (error) {
      console.error("ルームの参加に失敗しました:", error);
      alert("ルームに参加できませんでした。");
    }
  };

  return (
    <div className="japanese-font mx-auto max-w-6xl pt-8 px-4 min-h-screen text-outline">
      <Navbar />
      <div className="space-y-4 mx-auto max-w-6xl pt-8 px-4 py-0 min-h-screen text-outline">
        <h2 className="text-2xl font-semibold mb-4 my-9">ルーム一覧</h2>
        {waitingRooms.length > 0 ? (
          waitingRooms.map((room: any) => (
            <button
              key={room.id}
              className="bg-gray-900 p-4 rounded-lg shadow w-full text-left"
              onClick={() => handleJoinRoom(room.id, room.topic)}
              disabled={isLoading}
            >
              <h2 className="text-xl font-bold">{room.topic}</h2>
              <h2 className="text-xl font-bold">{room.userName}</h2>
            </button>
          ))
        ) : (
          <p>待機中のルームはありません。</p>
        )}
      </div>
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
    </div>
  );
};

export default WaitingRoomsPage;
