import FooterAuthAdmin from "@/components/Footer/FooterAuthAdmin";
import NavAuthAdmin from "@/components/Nav/NavAuthAdmin";
import React from "react";
import MenuAdmin from "@/components/Menu/MenuAdmin";

const AuthAdminLayout = ({ children }) => {
  return (
    <>
      <NavAuthAdmin />
      <div className="flex">
        <MenuAdmin />
        <div className="py-1 px-5 w-full">{children}</div>
      </div>
      <FooterAuthAdmin />
    </>
  );
};

export default AuthAdminLayout;
