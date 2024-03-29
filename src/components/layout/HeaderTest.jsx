// src/components/layout/HeaderTest.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const HeaderTest = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const isLoggegIn = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <nav className="bg-white border-fuchsia-200 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-gray-950 font-serif">
            Mez-Music
          </span>
        </Link>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="block text-gray-800 dark:text-white focus:outline-none"
          >
            {showMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        <div
          className={`md:flex w-full md:w-auto ${
            showMenu ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-fuchsia-100 rounded-lg bg-fuchsia-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            <Link
              to={"/"}
              className="block py-2 px-3 text-lg text-fuchsia-900 rounded hover:bg-fuchsia-100 md:hover:bg-transparent md:border-0 md:hover:text-fuchsia-700 md:p-0 dark:text-gray-950 md:dark:hover:text-white dark:hover:bg-white-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Home
            </Link>
            <Link
              to={"/connect"}
              className="block py-2 px-3 text-lg text-fuchsia-900 rounded hover:bg-fuchsia-100 md:hover:bg-transparent md:border-0 md:hover:text-fuchsia-700 md:p-0 dark:text-gray-950 md:dark:hover:text-white dark:hover:bg-white-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Connect
            </Link>
            <Link
              to={"/playlist"}
              className="block py-2 px-3 text-lg text-fuchsia-900 rounded hover:bg-fuchsia-100 md:hover:bg-transparent md:border-0 md:hover:text-fuchsia-700 md:p-0 dark:text-gray-950 md:dark:hover:text-white dark:hover:bg-white-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Playlist
            </Link>
            <Link
              to={"/prices"}
              className="block py-2 px-3 text-lg text-fuchsia-900 rounded hover:bg-fuchsia-100 md:hover:bg-transparent md:border-0 md:hover:text-fuchsia-700 md:p-0 dark:text-gray-950 md:dark:hover:text-white dark:hover:bg-white-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              PremiumPlans
            </Link>

            {/* singin & singUp */}
            {isLoggegIn ? (
              <>
                <Link to={"/"} className="nav-link" onClick={handleLogout}>
                  Logout
                </Link>
                <div className="relative">
                  <button className="block nav-link" onClick={toggleDropdown}>
                    <span className="username">{username}</span>
                    <i className="ml-6 w-1.5 h-2 text-center fa fa-user"></i>
                    <i className=" ml-1 w-7 h-5 fa fa-caret-down"></i>
                  </button>
                  {showDropdown && (
                    <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-50">
                      <Link
                        to={"/profile"}
                        className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100"
                      >
                        Profile
                      </Link>
                      <hr />
                      <Link
                        to={"/favorites"}
                        className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100"
                      >
                        Favorites
                      </Link>
                      <Link
                        to={"/subscription"}
                        className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100"
                      >
                        Subscription
                      </Link>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link
                  to={"/signup"}
                  className="block py-2 px-3 text-lg text-fuchsia-900 rounded hover:bg-fuchsia-100 md:hover:bg-transparent md:border-0 md:hover:text-fuchsia-700 md:p-0 dark:text-gray-950 md:dark:hover:text-white dark:hover:bg-white-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  SignUp
                </Link>
                <Link
                  to={"/login"}
                  className="block py-2 px-3 text-lg text-fuchsia-900 rounded hover:bg-fuchsia-100 md:hover:bg-transparent md:border-0 md:hover:text-fuchsia-700 md:p-0 dark:text-gray-950 md:dark:hover:text-white dark:hover:bg-white-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Login
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderTest;
