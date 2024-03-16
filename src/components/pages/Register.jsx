// src/pages/Register.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./auth.css";

const Register = () => {
  const [username, setuserName] = useState(""); // {/*name acts as getter and setName is setter keep that name in a variable to verify*/}
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [question, setquestion] = useState("select");
  const [answer, setAnswer] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleSelectChange = (e) => {
    setquestion(e.target.value);
  };

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://media-app-api.vercel.app/api/auth/register",
        {
          username,
          email,
          password,
          question,
          answer,
          phone,
        }
      );
      if (res.data && res.data.success) {
        toast.success(res.data.message);
        navigate("/");
      } else {
        console.log("error", res.data.message);
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Please enter all the details");
    }
  };

  return (
    <div id="login-form">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} method="POST">
        <label htmlFor="name">Enter-Name:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setuserName(e.target.value)}
          id="name"
          name="name"
          placeholder="Enter Your Full-Name"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          name="email"
          placeholder="Enter Your Email"
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          name="password"
          placeholder="Enter Password"
        />

        <label htmlFor="selectedQuestion">Select Question:</label>
        <select
          id="selectedQuestion"
          name="selectedQuestion"
          value={question}
          onChange={handleSelectChange}
        >
          <option value="select">Select an Option</option>
          <option value="question1">Your Pet Name</option>
          <option value="vegetable">Your Car Name</option>
          <option value="meat">Your Initial</option>
        </select>

        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          id="answer"
          name="answer"
          placeholder="Enter Your Answer"
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          id="phone"
          name="phone"
          placeholder="Enter Your Ph. no"
        />

        <p>
          Already have an account?
          <Link to="/" className="MovetoOther">
            {" "}
            Login
          </Link>
        </p>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Register;
