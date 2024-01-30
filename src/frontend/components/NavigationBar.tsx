// frontend/components/NavigationBar.tsx
import Link from 'next/link';
import React from 'react';

interface NavigationBarProps {
  username?: string;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ username }) => {
  return (
    <nav className="bg-gray-800 p-2 mt-0 fixed w-full z-10 top-0">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
          {/* Next.jsのLinkは使わないで、普通のリンクはそのまま */}
          <a className="text-white no-underline hover:text-white hover:no-underline" href="#">
            <span className="text-2xl pl-2">Debate Platform</span>
          </a>
        </div>
        <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
          <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li className="mr-3">
              <Link href="/">
                <b className="inline-block py-2 px-4 text-white no-underline">Home</b>
              </Link>
            </li>
            <li className="mr-3">
              <Link href="/debate">
                <b className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">Debate</b>
              </Link>
            </li>
            <li className="mr-3">
              <Link href="/rankings">
                <b className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">Rankings</b>
              </Link>
            </li>
            {username ? (
              <>
                <li className="mr-3">
                  <Link href="/profile">
                    <b className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">Profile</b>
                  </Link>
                </li>
                <li className="mr-3">
                  <a className="inline-block py-2 px-4 text-white no-underline" href="/api/logout">Logout</a>
                </li>
              </>
            ) : (
              <>
                <li className="mr-3">
                  <Link href="/login">
                    <b className="inline-block py-2 px-4 text-white no-underline">Login</b>
                  </Link>
                </li>
                <li className="mr-3">
                  <Link href="/register">
                    <b className="inline-block py-2 px-4 text-white no-underline">Register</b>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;