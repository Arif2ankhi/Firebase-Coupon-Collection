import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const links = (
    <>
      <NavLink className="text-black font-bold" to="/">Home</NavLink>
      <NavLink className="text-black font-bold ml-5" to="/brands">
        Brands
      </NavLink>
      <NavLink className="text-black font-bold ml-5" to="/myProfile">
        My Profile
      </NavLink>
      <NavLink className="text-black font-bold ml-5" to="/aboutDev">
        About Dev
      </NavLink>
    </>
  );

  return (
    <div className="navbar w-full mx-auto bg-blue-400 rounded-lg mt-2 mb-8 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <img
          className="w-[72px] h-[60px] text-2xl rounded-lg ml-4"
          src="../../../public/Images/logo.png"
          alt=""
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <button className="mr-4 btn btn-primary">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
