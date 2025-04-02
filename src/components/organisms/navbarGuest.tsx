"use client";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

export default function NavbarGuest() {
  const [Show, setShow] = useState(false);
  return (
    <nav className="flex w-full justify-between items-center px-6 py-4 z-50">
      <div className="text-lg font-semibold">Muhammad Ikwal Ramadhan</div>

      <div>
        {!Show ? (
          <RxHamburgerMenu className="w-6 h-6" onClick={() => setShow(!Show)} />
        ) : (
          <div className="absolute top-0 right-0 w-full h-screen flex flex-col bg-white">
            <div className="flex justify-end py-4 px-6">
              <IoCloseOutline
                className="w-6 h-6"
                onClick={() => setShow(!Show)}
              />
            </div>
            <ul className="flex-1 gap-4 py-4 px-6 overflow-y-auto touch-pan-y">
              {Array.from({ length: 60 }, (_, i) => (
                <li key={i}>{`link ke ${i + 1}`}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
