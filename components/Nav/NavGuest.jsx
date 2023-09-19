import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { FaUserCircle } from "react-icons/fa";

const NavGuest = () => {
  const router = useRouter();
  const { data } = useSession();
  return (
    <>
      <header className="navbar bg-base-100 bg-opacity-30 space-x-1">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  className={
                    router.route === "/"
                      ? `bg-yellow-300 hover:bg-yellow-400 focus:bg-yellow-400`
                      : null
                  }
                  href={"/"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={
                    router.route === "/artikel" ||
                    router.route.startsWith("/artikel/detail-post/")
                      ? `bg-yellow-300 hover:bg-yellow-400 focus:bg-yellow-400`
                      : null
                  }
                  href={"/artikel"}
                >
                  Artikel
                </Link>
              </li>
              <li>
                <Link
                  className={
                    router.route === "/portofolio"
                      ? `bg-yellow-300 hover:bg-yellow-400 focus:bg-yellow-400`
                      : null
                  }
                  href={"/portofolio"}
                >
                  Portofolio
                </Link>
              </li>
            </ul>
          </div>
          <h1 className="btn btn-ghost normal-case text-xl w-full lg:w-auto">
            Muhammad Ikwal Ramadhan
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <Link
                className={
                  router.route === "/"
                    ? `bg-yellow-300 hover:bg-yellow-400 focus:bg-yellow-400`
                    : null
                }
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={
                  router.route === "/artikel" ||
                  router.route.startsWith("/artikel/detail-post/")
                    ? `bg-yellow-300 hover:bg-yellow-400 focus:bg-yellow-400`
                    : null
                }
                href={"/artikel"}
              >
                Artikel
              </Link>
            </li>
            <li>
              <Link
                className={
                  router.route === "/portofolio"
                    ? `bg-yellow-300 hover:bg-yellow-400 focus:bg-yellow-400`
                    : null
                }
                href={`/portofolio`}
              >
                Portofolio
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {data && (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <FaUserCircle className="w-10 h-10" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <Link href={"/admin/upload-post"}>Upload Post</Link>
                </li>
                <li>
                  <button onClick={() => signOut()}>Logout</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default NavGuest;
