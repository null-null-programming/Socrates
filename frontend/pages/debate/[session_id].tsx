// /debate/[session_id].tsx
import { useRouter } from "next/router";
import Debate from "../../components/Debate";

const DebatePage = () => {
  const router = useRouter();
  const { session_id } = router.query;

  console.log(session_id);

  return (
    <div>
      <Debate session_id={session_id} />
    </div>
  );
};

export default DebatePage;
