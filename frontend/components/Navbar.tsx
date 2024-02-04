import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div class="page-background"></div>
      <nav className="px-5 py-4 text-[#F0E3E3]">
        <div className="flex justify-between items-center">
          <Link href="/">
            <b className="font-semibold text-3xl cursor-pointer">Socrates</b>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl md:hidden focus:outline-none"
          >
            ☰
          </button>
          <div className="hidden md:flex">
            <Link href="/">
              <b className="mr-4 cursor-pointer">Home</b>
            </Link>
            <Link href="/chat">
              <b className="cursor-pointer">Debate</b>
            </Link>
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
            className="absolute top-5 right-5 text-4xl cursor-pointer focus:outline-none transition-transform duration-300 ease-out"
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
              <Link href="/">
                <b onClick={() => setIsOpen(false)} className="cursor-pointer">
                  Home
                </b>
              </Link>
            </li>
            <li>
              <Link href="/chat">
                <b onClick={() => setIsOpen(false)} className="cursor-pointer">
                  Debate
                </b>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
