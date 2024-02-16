import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    const hostname = window.location.hostname;
    const pathname = window.location.pathname;

    if (hostname === "socrates-413218.web.app") {
      router.push(pathname);
    }
  }, [router]);
  return (
    <div className="japanese-font">
      <div className="mx-auto max-w-6xl pt-8 px-4 py-0 min-h-screen text-outline">
        <Navbar />
        <div className="flex justify-center">
          <Image
            src="/static/logo.png"
            alt="Socrates Logo"
            width={500}
            height={500}
          />
        </div>
        <p className="text-2xl font-bold text-center">
          Socratesは、AIを活用した
          <br />
          1対1のディベートバトルアプリ
          <br />
          このアプリは現在α版です。
          <br />
          <br />
          ご意見・ご要望・バグ報告は
          <br />
          ぬるぬる(X:@__Null_Null_)まで
        </p>
        <div className="text-center p-8">
          <Link href="/create">
            <b className=" japanese-font  text-xl border border-[#F0E3E3] bg-[#191825] text-[#F0E3E3] font-bold py-2 px-4 rounded transition-colors">
              部屋を作る
            </b>
          </Link>
          <Link href="/room">
            <b className=" japanese-font  text-xl border border-[#F0E3E3] bg-[#191825] text-[#F0E3E3] font-bold py-2 px-4 rounded transition-colors">
              部屋に入る
            </b>
          </Link>
          <h2 className="text-3xl font-bold mt-8 mb-4">ルール</h2>
          <ul
            className="list-disc list-inside space-y-2 mb-6 mx-auto text-xl"
            style={{ maxWidth: "800px" }}
          >
            <li>トピックに基づいて討論</li>
            <li>より高いスコアのユーザーが勝利します。</li>
            <li>発言の順番は自由</li>
            <li>制限時間は１０分</li>
            <li>各ユーザーの文字数制限は500文字</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
