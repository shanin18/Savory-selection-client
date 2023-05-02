import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/images/logo.png";

const NavigationBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-warning md:flex md:items-center md:justify-between md:px-5 py-2">
      <div>
        <Link to="/">
          <div className="flex justify-between items-center gap-3">
            <span className="text-2xl flex items-center font-semibold font-montserrat">
              <img className="w-20" src={logo} alt="logo" />
              Savory Selections
            </span>

            <span
              onClick={() => setToggle(!toggle)}
              className="mx-2 md:hidden block"
            >
              {!toggle ? (
                <HiMenuAlt3 className="text-3xl"></HiMenuAlt3>
              ) : (
                <HiX className="text-3xl"></HiX>
              )}
            </span>
          </div>
        </Link>
      </div>

      <ul
        className={`bg-warning md:flex gap-12 md:items-center z-50 md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 md:top-[-400px] transition-all ${
          toggle ? "top-[94px] opacity-100" : ""
        }`}
      >
        <li className="text-lg lg:px-2 py-6 font-semibold font-montserrat">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-white" : "")}
          >
            Home
          </NavLink>
        </li>
        <li className="text-lg lg:px-2 py-6 font-semibold font-montserrat">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-white" : "")}
          >
            About
          </NavLink>
        </li>
        <li className="text-lg lg:px-2 py-6 font-semibold font-montserrat">
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "text-white" : "")}
          >
            Blog
          </NavLink>
        </li>
        <li className="text-lg lg:px-2 py-6 font-semibold font-montserrat">
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "text-white" : "")}
          >
            <button className="">Login</button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
