import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HeaderTest = () => {
  const navigate = useNavigate();

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

        <form className="w-80 mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-fuchsia-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-white-500 dark:text-fuchsia-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-white-900 border rounded-lg bg-white-50 dark:bg-fuchsia-950 dark:border-fuchsia-600 dark:placeholder-white-400 dark:text-white"
              placeholder="Search Albums, Songs..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 dark:bg-fuchsia-950 dark:hover:bg-fuchsia-900"
            >
              Search
            </button>
          </div>
        </form>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-fuchsia-100 rounded-lg bg-fuchsia-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            <Link
              to={"/"}
              className="block py-2 px-3 text-lg text-fuchsia-900 rounded hover:bg-fuchsia-100 md:hover:bg-transparent md:border-0 md:hover:text-fuchsia-700 md:p-0 dark:text-gray-950 md:dark:hover:text-white dark:hover:bg-white-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Home
            </Link>
            <Link
              to={"/about"}
              className="block py-2 px-3 text-lg text-fuchsia-900 rounded hover:bg-fuchsia-100 md:hover:bg-transparent md:border-0 md:hover:text-fuchsia-700 md:p-0 dark:text-gray-950 md:dark:hover:text-white dark:hover:bg-white-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              About
            </Link>
            <Link
              to={"/albums"}
              className="block py-2 px-3 text-lg text-fuchsia-900 rounded hover:bg-fuchsia-100 md:hover:bg-transparent md:border-0 md:hover:text-fuchsia-700 md:p-0 dark:text-gray-950 md:dark:hover:text-white dark:hover:bg-white-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Albums
            </Link>
            <Link
              to={"/premiumplans"}
              className="block py-2 px-3 text-lg text-fuchsia-900 rounded hover:bg-fuchsia-100 md:hover:bg-transparent md:border-0 md:hover:text-fuchsia-700 md:p-0 dark:text-gray-950 md:dark:hover:text-white dark:hover:bg-white-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              PremiumPlans
            </Link>
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderTest;
