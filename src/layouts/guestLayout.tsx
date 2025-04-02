import FooterGuest from "@/components/organisms/footerGuest";
import NavbarGuest from "@/components/organisms/navbarGuest";
import React from "react";

export default function GuestLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <NavbarGuest />
      {children}
      <FooterGuest />
    </>
  );
}
