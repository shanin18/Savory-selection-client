import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { AuthContext } from "../Context/AuthProvider";
// react tooltip
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
// react toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import logo from "../assets/images/logo.png";

const NavigationBar = () => {
  const [toggle, setToggle] = useState(false);

  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => toast("logout successfully!!"))
      .catch((err) => toast.error(err.message));
  };

  return (
    <nav className="bg-warning md:flex md:items-center md:justify-between md:px-5 py-2">
      {/* logo area */}
      <div className="flex justify-between items-center gap-3">
        <Link to="/">
          <span className="text-2xl flex items-center font-semibold font-montserrat">
            <img className="w-20" src={logo} alt="logo" />
            Savory Selections
          </span>
        </Link>

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

      {/*  navItems area */}
      <ul
        className={`bg-warning md:flex gap-12 md:items-center z-50 md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 md:top-[-400px] transition-all ${
          toggle ? "top-[93px] md:top-[94px]  opacity-100" : "-z-50"
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
            to="/blog"
            className={({ isActive }) => (isActive ? "text-white" : "")}
          >
            Blog
          </NavLink>
        </li>
        {!user ? (
          <NavLink to="/login">
            <button className="lg:mr-2 font-montserrat text-semibold btn bg-black text-yellow-300 px-6 py-2">
              Login
            </button>
          </NavLink>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div id="tool-tip" className="w-10 rounded-full">
                <img
                  src={
                    user?.photoURL
                      ? user?.photoURL
                      : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content dropdown-center md:dropdown-end bg-base-100 rounded-box w-52"
            >
              <li onClick={handleLogOut}>
                <p className="font-montserrat font-semibold">Logout</p>
              </li>
            </ul>
          </div>
        )}
      </ul>

      {/* react tooltip component */}
      <ReactTooltip
        anchorId="tool-tip"
        place="bottom"
        content={user?.displayName}
        className="z-50 font-montserrat bg-black"
      />
    </nav>
  );
};

export default NavigationBar;
