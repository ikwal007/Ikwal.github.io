import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const NavGuest = () => {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <header className="navbar bg-base-100 bg-opacity-30">
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
                <a>Posts</a>
                <ul className="p-2">
                  <li>
                    <Link
                      className={
                        router.asPath === "/posts/php"
                          ? `bg-yellow-300 hover:bg-yellow-400 focus:bg-yellow-400`
                          : null
                      }
                      href={"/posts/php"}
                    >
                      Php
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        router.asPath === "/posts/javascript"
                          ? `bg-yellow-300 hover:bg-yellow-400 focus:bg-yellow-400`
                          : null
                      }
                      href={"/posts/javascript"}
                    >
                      JavaScript
                    </Link>
                  </li>
                </ul>
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
          <a className="btn btn-ghost normal-case text-xl">
            Muhammad Ikwal Ramadhan
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
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
            <li tabIndex={0}>
              <details>
                <summary>Post</summary>
                <ul className="p-2">
                  <li>
                    <Link
                      className={
                        router.asPath === "/posts/php"
                          ? `bg-yellow-300 hover:bg-yellow-400 focus:bg-yellow-400`
                          : null
                      }
                      href={"/posts/php"}
                    >
                      Php
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        router.asPath === "/posts/javascript"
                          ? `bg-yellow-300 hover:bg-yellow-400 focus:bg-yellow-400`
                          : null
                      }
                      href={"/posts/javascript"}
                    >
                      JavaScript
                    </Link>
                  </li>
                </ul>
              </details>
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
        <div className="navbar-end"></div>
      </header>
    </>
  );
};

export default NavGuest;
