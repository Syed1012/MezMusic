import React from "react";

const HeaderTest = () => {
  return (
    <nav className="bg-white border-purple-200 dark:bg-purple-950 rounded-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white font-serif">
            Mez-Music
          </span>
        </a>

        <form className="w-80 mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-purple-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-white-500 dark:text-purple-300"
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
              className="block w-full p-4 ps-10 text-sm text-white-900 border rounded-lg bg-white-50 dark:bg-purple-950 dark:border-purple-600 dark:placeholder-white-400 dark:text-white"
              placeholder="Search Albums, Songs..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-950 dark:hover:bg-purple-900"
            >
              Search
            </button>
          </div>
        </form>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-purple-100 rounded-lg bg-purple-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-purple-800 md:dark:bg-purple-950 dark:border-purple-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-purple-700 rounded md:bg-transparent md:text-purple-700 md:p-0 dark:text-white md:dark:text-purple-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-purple-900 rounded hover:bg-purple-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-purple-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-purple-900 rounded hover:bg-purple-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-purple-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Albums
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-purple-900 rounded hover:bg-purple-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-purple-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                PremiumPlans
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-purple-900 rounded hover:bg-purple-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-purple-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                SignUp
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-purple-900 rounded hover:bg-purple-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-purple-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderTest;
