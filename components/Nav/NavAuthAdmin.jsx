import React from "react";
import { BsSearch } from "react-icons/bs";
import { IoNotificationsCircle } from "react-icons/io5";
import { BiSolidUserCircle } from "react-icons/bi";
import { signOut } from "next-auth/react";

const NavAuthAdmin = () => {
  return (
    <div className="navbar bg-base-100">
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
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="inline-flex px-4 items-center min-h-12 normal-case text-xl">Home</a>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <IoNotificationsCircle className="w-8 h-8" />
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <BiSolidUserCircle className="w-10 h-10" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <button type="button" onClick={() => signOut()}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    // <div className="navbar bg-base-100">
    //   <div className="flex-1">
    //     <a className="inline-flex px-4 min-h-12 normal-case text-xl">Home</a>
    //   </div>
    //   <div className="flex-none">
    //     <div className="dropdown dropdown-end">
    //       <label tabIndex={0} className="btn btn-ghost btn-circle">
    //         <div className="indicator">
    //           <IoNotificationsCircle className="w-8 h-8" />
    //           <span className="badge badge-sm indicator-item">8</span>
    //         </div>
    //       </label>
    //       <div
    //         tabIndex={0}
    //         className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
    //       >
    //         <div className="card-body">
    //           <span className="font-bold text-lg">8 Items</span>
    //           <span className="text-info">Subtotal: $999</span>
    //           <div className="card-actions">
    //             <button className="btn btn-primary btn-block">View cart</button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="dropdown dropdown-end">
    //       <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
    //         <div className="w-10 rounded-full">
    //           <BiSolidUserCircle className="w-10 h-10" />
    //         </div>
    //       </label>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
    //       >
    //         <li>
    //           <a className="justify-between">
    //             Profile
    //             <span className="badge">New</span>
    //           </a>
    //         </li>
    //         <li>
    //           <a>Settings</a>
    //         </li>
    //         <li>
    //           <button type="button" onClick={() => signOut()}>
    //             Logout
    //           </button>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
};

export default NavAuthAdmin;
