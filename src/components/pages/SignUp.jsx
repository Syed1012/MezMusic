// src/components/pages/SignUp.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const SignUp = () => {
  const [username, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  //Form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5109/api/auth/signup", {
        username,
        email,
        password,
        phone,
      });
      if (res.data && res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        console.log("error", res.data.message);
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Please Enter all details");
    }
  };

  return (
    <div className="flex mt-28 justify-center items-center h-screen">
      <div className="bg-white p-8 w-full sm:w-96 shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] group hover:shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] rounded-3xl">
        <h2 className="text-2xl font-bold mb-6 font-serif">Sign-Up</h2>
        <form className="space-y-4" onSubmit={handleSubmit} method="POST">
          {/* Input Username */}
          <div>
            <label
              htmlFor="username"
              className="font-medium flex items-start font-serif"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setuserName(e.target.value)}
              placeholder="Enter name"
              className="mt-3 font-serif h-10 text-center block w-full rounded border-gray-300 shadow-inner shadow-purple-500/40 hover:shadow-purple-950/40 focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
              autoComplete="off"
            />
          </div>
          {/* Input Email */}
          <div>
            <label
              htmlFor="email"
              className="font-medium  font-serif flex items-start"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="mt-3 h-10 text-center font-serif block w-full rounded border-gray-300 shadow-inner shadow-purple-500/40 hover:shadow-purple-950/40 focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
              autoComplete="off"
            />
          </div>
          {/* Input password */}
          <div>
            <label
              htmlFor="password"
              className=" font-serif font-medium flex items-start"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="mt-3 h-10 text-center font-serif block w-full rounded border-gray-300 shadow-inner shadow-purple-500/40 hover:shadow-purple-950/40 focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
              autoComplete="off"
            />
          </div>
          {/* Input phone */}
          <div>
            <label
              htmlFor="phone"
              className="font-medium font-serif flex items-start"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Phone no."
              className="mt-3 h-10 text-center font-serif block w-full rounded border-gray-300 shadow-inner shadow-purple-500/40 hover:shadow-purple-950/40 focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
              autoComplete="off"
            />
          </div>
          {/* SignUp Button */}
          <button
            type="submit"
            className="w-full font-serif bg-purple-200 text-black font-bold py-2 rounded shadow-md hover:bg-purple-700 hover:text-white"
            style={{ marginTop: "20px" }}
            value="submit"
          >
            SignUp
          </button>
          {/* SignUp with google */}
          <div className="flex items-center justify-center rounded ">
            <button className="px-4 py-2 border flex items-center justify-center gap-2 bg-purple-200 font-bold hover:bg-purple-700 text-black border-slate-200 w-full rounded-lg hover:text-white font-serif  hover:shadow transition duration-150">
              <img
                className="w-6 h-6"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="google logo"
              />
              <span>Login with Google</span>
            </button>
          </div>
          {/* Lower Items */}
          <div className="loweritems">
            <p className="mt-3 font-serif font-semibold">
              Already have an account{""}
              <Link
                to={"/login"}
                className="ml-1 bg-indigo-100 p-1 rounded hover:underline font-serif"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
