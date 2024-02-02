import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Socrates</h1>
      <Link href="/chat">
        <b className="mt-4 text-2xl text-blue-500">Debate Room</b>
      </Link>
    </div>
  );
};

export default Home;
