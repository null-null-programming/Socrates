import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Ranking = () => {
  const [users, setUsers] = useState<any>([]);
  const [lastVisible, setLastVisible] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // ユーザーデータの初回取得
  const fetchInitialUsers = async () => {
    setLoading(true);
    const q = query(collection(db, "users"), orderBy("rate", "desc"));
    const querySnapshot = await getDocs(q);
    const lastVisibleDocument =
      querySnapshot.docs[querySnapshot.docs.length - 1];
    setLastVisible(lastVisibleDocument);
    const usersData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setUsers(usersData);
    setLoading(false);
  };

  // 次のページのユーザーデータを取得
  const fetchNextUsers = async () => {
    if (!lastVisible) return; // 最後のドキュメントがない場合は実行しない
    setLoading(true);
    const q = query(
      collection(db, "users"),
      orderBy("rate", "desc"),
      startAfter(lastVisible)
    );
    const querySnapshot = await getDocs(q);
    const lastVisibleDocument =
      querySnapshot.docs[querySnapshot.docs.length - 1];
    setLastVisible(lastVisibleDocument);
    const usersData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setUsers(usersData); // ここで既存のデータを新しいデータで置き換える
    setLoading(false);
  };

  useEffect(() => {
    fetchInitialUsers();
  }, []);

  return (
    <div className="japanese-font">
      <div className="mx-auto max-w-6xl pt-8 px-4 py-0 min-h-screen text-outline">
        <Navbar />
        <div className="ranking-list py-8">
          {users.map((user, index) => (
            <div key={user.id} className="user-info flex p-2 text-xl">
              <img
                src={
                  user.img_url ||
                  "https://firebasestorage.googleapis.com/v0/b/socrates-413218.appspot.com/o/util%2Fanonymous.png?alt=media&token=b433ffba-46b8-47cb-8699-6c2780814c34"
                }
                alt="User"
                className="w-32"
              />
              <p className="px-2 py-9">
                {index + 1}. {user.name} - Rate: {user.rate}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ranking;
