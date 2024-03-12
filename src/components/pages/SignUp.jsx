import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex mt-6 justify-center items-center h-screen">
      <div className="bg-white p-8 w-full sm:w-96 shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] group hover:shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] rounded-3xl">
        <h2 className="text-2xl font-bold mb-6 font-serif">Sign-Up</h2>
        <form className="space-y-4">
          {/* Input Username */}
          <div>
            <label htmlFor="username" className="font-medium flex items-start">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter name"
              className="mt-3 h-10 text-center block w-full rounded border-gray-300 shadow-inner shadow-purple-500/40 hover:shadow-purple-950/40 focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
              autoComplete="off"
            />
          </div>
          {/* Input Email */}
          <div>
            <label htmlFor="email" className="font-medium flex items-start">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter Email"
              className="mt-3 h-10 text-center block w-full rounded border-gray-300 shadow-inner shadow-purple-500/40 hover:shadow-purple-950/40 focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
              autoComplete="off"
            />
          </div>
          {/* Input password */}
          <div>
            <label htmlFor="password" className="font-medium flex items-start">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              className="mt-3 h-10 text-center block w-full rounded border-gray-300 shadow-inner shadow-purple-500/40 hover:shadow-purple-950/40 focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
              autoComplete="off"
            />
          </div>
          {/* Input phone */}
          <div>
            <label htmlFor="phone" className="font-medium flex items-start">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Enter Phone no."
              className="mt-3 h-10 text-center block w-full rounded border-gray-300 shadow-inner shadow-purple-500/40 hover:shadow-purple-950/40 focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
              autoComplete="off"
            />
          </div>
          {/* SignUp Button */}
          <button
            type="submit"
            className="w-full bg-purple-500 text-white font-bold py-2 rounded shadow-md hover:bg-purple-700"
            style={{marginTop:"15px"}}
          >
            SignUp
          </button>
          {/* Lower Items */}
          <div className="loweritems">
            <p className="mt-3 font-serif font-semibold">
              Already have an account{""}
              <Link to={"/login"} className="ml-1 bg-indigo-100 p-1 rounded hover:underline font-serif">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
