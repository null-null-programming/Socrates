import { doc, getDoc, updateDoc } from "firebase/firestore";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/auth";
import { db } from "../lib/firebase";

const Profile = () => {
  const [name, setName] = useState("");
  const [imgFile, setImgFile] = useState(null);
  const [imgUrl, setImgUrl] = useState(""); // 画像URLを表示するためのstate
  const user = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      alert("ログインしてください。");
      router.push("/");
      return;
    }

    const userId = user?.id;
    if (!userId) return;
    const docRef = doc(db, "users", userId);
    const fetchUserData = async () => {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setName(docSnap.data().name); // ユーザー名を取得して設定
        // Firestoreから画像URLを取得して設定。ドキュメントにimg_urlがない場合はデフォルトの画像を使用
        const storedImgUrl =
          docSnap.data().img_url ||
          "https://firebasestorage.googleapis.com/v0/b/socrates-413218.appspot.com/o/util%2Fanonymous.png?alt=media&token=b433ffba-46b8-47cb-8699-6c2780814c34";
        setImgUrl(storedImgUrl);
      } else {
        console.log("No such document!");
      }
    };
    fetchUserData();
  }, [user, router]);

  const handleUpdate = async () => {
    if (!user) return;
    const userId = user.id;
    const userRef = doc(db, "users", userId);
    let imgUrl = ""; // 初期状態を空文字に設定

    if (imgFile) {
      // 画像ファイルがある場合、アップロードしてそのURLを取得
      const storage = getStorage();
      const storageRef = ref(storage, `users/${userId}/profile.png`);
      const uploadTask = uploadBytesResumable(storageRef, imgFile);
      await uploadTask;
      imgUrl = await getDownloadURL(storageRef);
    } else {
      // 画像ファイルがない場合、デフォルト画像(/util/anonymous.png)のURLを設定
      const storage = getStorage();
      const defaultImgRef = ref(storage, "util/anonymous.png");
      imgUrl = await getDownloadURL(defaultImgRef);
    }

    console.log(imgUrl);

    // Firestoreに名前と画像URLを更新
    await updateDoc(userRef, {
      name: name,
      img_url: imgUrl,
    });
  };

  return (
    <div className="japanese-font">
      <div className="mx-auto max-w-6xl pt-8 px-4 py-0 min-h-screen text-outline">
        <Navbar />
        <div className="profile-container">
          <h1 className="japanese-font text-6xl py-2">Profile</h1>
          <img
            src={imgUrl}
            alt="Profile Image"
            height={300}
            width={300}
            className="rounded-full mx-auto"
          />
          <div className="">
            <input
              type="file"
              onChange={(e) => setImgFile(e.target.files[0])}
              className="w-32 h-16  mx-auto  w-full text-white text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
            />
          </div>
          <div className="">
            <input
              type="text"
              className="text-black mx-auto mb-6  p-2 rounded-md border-2 border-gray-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="username"
            />
          </div>
          <div>
            <button
              className="apply-font  text-3xl border border-[#F0E3E3] bg-[#191825] text-[#F0E3E3] font-bold py-2 px-4 rounded transition-colors"
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
