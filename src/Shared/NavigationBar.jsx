import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/images/logo.png";
import { AuthContext } from "../Context/AuthProvider";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NavigationBar = () => {
  const [toggle, setToggle] = useState(false);

  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () =>{
    logOut()
    .then(()=> toast("logout successfully!!"))
    .catch(err=> toast.error(err.message))
  }
  console.log(user)

  return (
    <nav className="bg-warning md:flex md:items-center md:justify-between md:px-5 py-2">
      <div>
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
        {!user ? (
          <li className="text-lg lg:px-2 py-6 font-semibold font-montserrat">
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "text-white" : "")}
            >
              Login
            </NavLink>
          </li>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div id="tool-tip" className="w-10 rounded-full">
                <img src={user?.photoURL} />
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
