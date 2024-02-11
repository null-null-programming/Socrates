import { useAuth } from "@/context/auth";
import { login, logout } from "@/lib/auth";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useAuth();
  const [waiting, setWaiting] = useState<boolean>(false);

  const signIn = () => {
    setWaiting(true);

    login()
      .catch((error) => {
        console.error(error?.code);
      })
      .finally(() => {
        setWaiting(false);
      });
  };

  return (
    <div className="apply-font">
      <div className="page-background"></div>
      <nav className="px-5 py-0text-[#F0E3E3]">
        <div className="flex justify-between items-center">
          <Link href="/" scroll={false}>
            <b className="font-semibold text-6xl cursor-pointer">Socrates</b>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl md:hidden focus:outline-none"
          >
            ☰
          </button>
          <div className="hidden md:flex text-4xl">
            <Link href="/" scroll={false}>
              <b className="mr-4 cursor-pointer">Home</b>
            </Link>
            {user && (
              <Link href="/create" scroll={false}>
                <b className="mr-4 cursor-pointer">Create</b>
              </Link>
            )}
            {user && (
              <Link href="/room" scroll={false}>
                <b className="mr-4 cursor-pointer">Room</b>
              </Link>
            )}
            {user && (
              <Link href="/ranking" scroll={false}>
                <b className="mr-4 cursor-pointer">Ranking</b>
              </Link>
            )}
            {user && (
              <Link href="/profile" scroll={false}>
                <b className="mr-4 cursor-pointer">Profile</b>
              </Link>
            )}
            <div
              onClick={() => setIsOpen(false)}
              className="cursor-pointer pl-4"
            >
              {user === null && !waiting && (
                <button onClick={signIn}>
                  <b>Login</b>
                </button>
              )}
            </div>
            <div onClick={() => setIsOpen(false)} className="cursor-pointer ">
              {user && (
                <button onClick={logout}>
                  <b>Logout</b>
                </button>
              )}
            </div>
          </div>
        </div>
        <div
          className={`fixed inset-0 z-20 p-10 text-lg md:hidden ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          } transition-opacity duration-500 ease-in-out transform ${
            isOpen ? "translate-y-0" : "translate3d(0, -10px, 0)"
          }`}
          style={{
            backgroundColor: "rgba(25, 24, 37, 0.95)",
            willChange: "opacity, transform",
          }}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-8xl cursor-pointer focus:outline-none transition-transform duration-300 ease-out"
            style={{
              transform: isOpen ? "rotate(0)" : "rotate(90deg)",
              willChange: "transform",
            }}
          >
            &times;
          </button>
          <ul
            className={`space-y-8 ${
              isOpen ? "translate-y-0" : "-translate-y-10"
            } transition-transform duration-500 ease-in-out`}
          >
            <li>
              <Link href="/" scroll={false}>
                <b
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer text-7xl"
                >
                  Home
                </b>
              </Link>
            </li>
            {user && (
              <li>
                <Link href="/create" scroll={false}>
                  <b
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer text-7xl"
                  >
                    Create
                  </b>
                </Link>
              </li>
            )}
            {user && (
              <li>
                <Link href="/room" scroll={false}>
                  <b
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer text-7xl"
                  >
                    Room
                  </b>
                </Link>
              </li>
            )}
            {user && (
              <li>
                <Link href="/ranking" scroll={false}>
                  <b
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer text-7xl"
                  >
                    Ranking
                  </b>
                </Link>
              </li>
            )}
            {user && (
              <li>
                <Link href="/profile" scroll={false}>
                  <b
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer text-7xl"
                  >
                    Profile
                  </b>
                </Link>
              </li>
            )}
            <li>
              <div
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-7xl"
              >
                {user === null && !waiting && (
                  <button onClick={signIn}>
                    <b>Login</b>
                  </button>
                )}
              </div>
            </li>
            <li>
              <div
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-7xl"
              >
                {user && (
                  <button onClick={logout}>
                    <b>Logout</b>
                  </button>
                )}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
