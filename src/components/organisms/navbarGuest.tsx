"use client";
import Link from "next/link";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { RiArticleFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { JSX } from "react/jsx-runtime";

interface Data {
  name: string;
  icon: JSX.Element;
  href: string;
}

export const Data: Data[] = [
  {
    name: "Home",
    icon: <FaHome className="w-6 h-6" />,
    href: `${process.env.NEXT_PUBLIC_URL}`,
  },
  {
    name: "Artikel",
    icon: <RiArticleFill className="w-6 h-6" />,
    href: `${process.env.NEXT_PUBLIC_URL}/article`,
  },
];

export default function NavbarGuest() {
  const [Show, setShow] = useState(false);
  return (
    <nav className="flex w-full justify-between items-center px-6 py-4 z-50">
      <div className="text-lg font-semibold">Muhammad Ikwal Ramadhan</div>

      <div>
        {!Show ? (
          <button onClick={() => setShow(!Show)}>
            <RxHamburgerMenu className="w-6 h-6 hover:cursor-pointer" />
          </button>
        ) : (
          <div className="fixed z-[999] top-0 right-0 w-full h-screen flex flex-col bg-white">
            <div className="flex justify-end py-4 px-6">
              <IoCloseOutline
                className="w-6 h-6 hover:cursor-pointer"
                onClick={() => setShow(!Show)}
              />
            </div>
            <ul className="flex-1 gap-4 py-4 px-6 overflow-y-auto touch-pan-y">
              {Data.map((data, index) => (
                <li className="w-max px-4 py-2" key={index}>
                  <Link className="flex gap-4 text-2xl" href={data.href}>
                    {data.icon} {data.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
