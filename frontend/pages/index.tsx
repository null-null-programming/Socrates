import Link from "next/link";
import Navbar from "../components/Navbar";

const IndexPage = () => {
  return (
    <div className="japanese-font">
      <div className="mx-auto max-w-6xl pt-8 px-4 py-0 min-h-screen text-outline">
        <Navbar />
        <img
          src="../static/logo.png"
          alt="Socrates Logo"
          className="mx-auto mb-6"
        />
        <p className="text-2xl font-bold text-center">
          Socratesは、AIを活用した
          <br />
          1対1のディベートバトルアプリ
        </p>

        <div className="text-center p-8">
          <Link href="/create">
            <b className=" apply-font  text-3xl border border-[#F0E3E3] bg-[#191825] text-[#F0E3E3] font-bold py-2 px-4 rounded transition-colors">
              Start Debate
            </b>
          </Link>
          <h2 className="text-3xl font-bold mt-8 mb-4">ルール</h2>
          <ul
            className="list-disc list-inside space-y-2 mb-6 mx-auto text-xl"
            style={{ maxWidth: "800px" }}
          >
            <li>トピックに基づいて討論</li>
            <li>より高いスコアのユーザーが勝利します。</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
