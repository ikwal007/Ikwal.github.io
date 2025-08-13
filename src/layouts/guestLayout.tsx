import FooterGuest from "@/components/organisms/footerGuest";
import { NavBar2 } from "@/components/ui/Navbar2";
import React from "react";

export default function GuestLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="flex w-full py-10">
        <NavBar2 />
      </div>
      {children}
      <FooterGuest />
    </>
  );
}
