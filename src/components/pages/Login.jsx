// src/pages/Login.js

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await axios.post(
  //       "https://media-app-api.vercel.app/api/auth/login",
  //       {
  //         email,
  //         password,
  //       }
  //     );

  //     if (res.data && res.data.success) {
  //       // After a successful login
  //       localStorage.setItem("token", res.data.token);
  //       localStorage.setItem("userId", res.data.user._id); // Store user ID in local storage
  //       localStorage.setItem("username", res.data.user.username); // Store username in local storage
  //       toast.success(res.data.message);
  //       navigate("/upload");
  //     } else {
  //       const errorMessage = res.data.message || "Login failed";
  //       console.error("Error:", errorMessage);

  //       // Display specific toast messages for different error scenarios
  //       if (errorMessage.includes("Email and password are required")) {
  //         toast.error("Please enter email and password");
  //       } else if (errorMessage.includes("User not found")) {
  //         toast.error("User not found. Please register.");
  //       } else if (errorMessage.includes("Invalid password")) {
  //         toast.error("Invalid password. Please try again.");
  //       } else {
  //         toast.error(errorMessage);
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     toast.error("Oops! Something went wrong. Please try again.");
  //   }
  // };

  return (
    <>
      <div className="flex mt-6 justify-center items-center h-screen">
        <div className="bg-white p-8 w-full sm:w-96 shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] group hover:shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] rounded-3xl">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <form className="space-y-4">
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
            <div>
              <label
                htmlFor="password"
                className="font-medium flex items-start"
              >
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
            <button
              type="submit"
              className="w-full bg-purple-500 text-white font-bold py-2 rounded shadow-md hover:bg-purple-700"
            >
              Login
            </button>

            <div className="loweritems">
              <span className="mt-6 text-center font-mono">
                <Link>Forgot-Password</Link>
              </span>
              <p className="mt-3 font-mono">
                Are you new here{" "}
                <Link className="ml-1 hover:underline font-mono">
                  Click-Here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
