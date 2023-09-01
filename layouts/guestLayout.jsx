import FooterGuest from "@/components/Footer/FooterGuest";
import NavGuest from "@/components/Nav/NavGuest";
import Seo from "@/components/Seo/Seo";
import React from "react";

const GuestLayout = ({children}) => {
  return (
    <>
      <Seo />
      <NavGuest />
      {children}
      <FooterGuest />
    </>
  );
};

export default GuestLayout;
