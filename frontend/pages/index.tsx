import Navbar from "../components/Navbar";
import StartDebateButton from "../components/StartDebateButton";

const IndexPage = () => {
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
          <StartDebateButton />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
