import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

// react toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import logo from "../assets/images/logo.png";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => toast("logout successfully!!"))
      .catch((err) => toast.error(err.message));
  };

  return (
    <div>
      <div className=" bg-warning">
        <div className="container mx-auto navbar justify-between">
          <div className="flex-row-reverse justify-between w-full">
            <div className="dropdown dropdown-end">
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
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 rounded-box w-52"
              >
                <li className="text-lg lg:px-2 mt-5 font-semibold font-montserrat">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-white" : "text-warning"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="text-lg lg:px-2 mt-5 font-semibold font-montserrat">
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      isActive ? "text-white" : "text-warning"
                    }
                  >
                    Blog
                  </NavLink>
                </li>
                {!user ? (
                  <NavLink to="/login">
                    <button className="lg:mr-2 font-montserrat text-semibold btn btn-warning px-6 py-2 mt-5">
                      Login
                    </button>
                  </NavLink>
                ) : (
                  <div className="dropdown dropdown-start md:dropdown-end">
                    <label
                      tabIndex={1}
                      className="btn btn-ghost btn-circle avatar"
                    >
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
                      tabIndex={1}
                      className="mt-3 p-2 shadow menu menu-compact dropdown-content md:dropdown-end bg-base-100 rounded-box w-52"
                    >
                      <li onClick={handleLogOut}>
                        <p className="font-montserrat font-semibold">Logout</p>
                      </li>
                    </ul>
                  </div>
                )}
              </ul>
            </div>
            <div className="flex justify-between items-center gap-3">
              <Link to="/">
                <span className="text-2xl flex items-center font-semibold font-montserrat">
                  <img className="w-20" src={logo} alt="logo" />
                  Savory Selections
                </span>
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex">
            <ul className="flex items-center gap-8">
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
                <li>
                  <NavLink to="/login">
                    <button className="lg:mr-2 font-montserrat text-semibold btn bg-black text-yellow-300 px-6 py-2">
                      Login
                    </button>
                  </NavLink>
                </li>
              ) : (
                <div className="dropdown dropdown-start md:dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        title={user?.displayName}
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
                    className="mt-3 p-2 shadow menu menu-compact dropdown-content md:dropdown-end bg-base-100 rounded-box w-52"
                  >
                    <li onClick={handleLogOut}>
                      <p className="font-montserrat font-semibold">Logout</p>
                    </li>
                  </ul>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
