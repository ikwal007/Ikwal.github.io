import Link from "next/link";
import React from "react";
import { IoMdCreate } from "react-icons/io";

const MenuAdmin = () => {
  return (
    <div className="w-max md:64 py-1 px-5 border-r-2 border-solid border-white hidden md:flex">
      <div className="flex flex-col gap-2 mb-5">
        <span className="hidden text-xs font-extralight text-[#ddd] uppercase lg:flex">Posting</span>
        <Link className="flex items-center gap-2 p-2 rounded-md hover:bg-[#384256]" href={"/admin/upload-post"}>
        <IoMdCreate />
          <span className="hidden lg:flex">Upload Post</span>
        </Link>
      </div>
    </div>
  );
};

export default MenuAdmin;
