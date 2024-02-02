import Link from "next/link";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-[#191825]">
      <div className="mx-auto max-w-6xl pt-8 px-4 min-h-screen text-[#F0E3E3]">
        <Navbar />
        <img
          src="../static/logo.png"
          alt="Socrates Logo"
          className="mx-auto mb-6"
        />
        <p className="text-2xl font-bold text-center">
          Socratesは、LLMを活用した一対一のディベートバトルアプリです。
        </p>

        <div className="text-center p-8">
          <h2 className="text-3xl font-bold mt-8 mb-4">ゲームルール</h2>
          <ul
            className="list-disc list-inside space-y-2 mb-6 mx-auto text-xl"
            style={{ maxWidth: "800px" }}
          >
            <li>ランダムに選択されたトピックに基づいて討論</li>
            <li>AIが討論を分析しスコアを算出</li>
            <li>より高いスコアのユーザーが勝利します。</li>
          </ul>
        </div>

        <div className="text-center">
          <Link href="/chat">
            <h1 className="inline-block border boerder-[#F0E3E3] bg-[#191825] text-[#F0E3E3] font-bold py-2 px-4 rounded hover:bg-[#FF6969] hover:border-[#FF6969] transition-colors hover:text-[#F0E3E3]">
              Start Debate
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
