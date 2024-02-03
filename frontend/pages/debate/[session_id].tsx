// pages/debate/[session_id].tsx
import { GetServerSideProps } from "next";
import Debate from "../../components/Debate";
import { fetchCurrentSessionState } from "../../lib/fetchCurrentSessionState";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session_id = context.params?.session_id;
  console.log(session_id);

  if (typeof session_id !== "string") {
    return { props: { error: "Invalid session ID." } };
  }

  // サーバーサイドでセッション状態を取得
  try {
    const sessionState = await fetchCurrentSessionState(session_id);
    return { props: { sessionState, sessionId: session_id } };
  } catch (error) {
    console.error(error);
    return { props: { error: "Failed to fetch session state." } };
  }
};

const DebatePage = ({ sessionState, sessionId, error }) => {
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Debate Session: {sessionId}</h1>
      <Debate sessionId={sessionId} sessionState={sessionState} />
    </div>
  );
};

export default DebatePage;
