// server/routes/auth.js
import express from "express";
import User from "../models/User.js";
import JWT from "jsonwebtoken";
import { hashPassword, comparePassword } from "../helpers/authHelper.js"; // Assuming you have a function to compare passwords

// now we can use router variable for GET, POST, UPDATE, DELETE routes and using routes
const router = express.Router();

//Eg. below of user signup
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;

    // Check for missing fields
    if (!username || !email || !password || !phone) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill all the fields" });
    }

    //check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists!" });
    }

    //Hash password
    const hashedPassword = await hashPassword(password);

    if (!hashedPassword) {
      // Handle hashing error
      return res
        .status(500)
        .json({ success: false, message: "Error hashing password" });
    }

    //Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
    });

    await newUser.save();

    res
      .status(201)
      .json({ success: true, message: "User Successfully registered" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error in registration" });
  }
});

// user signin
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    //checking for missing fields
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Email and passsword are required" });
    }

    // Finding user by email
    const user = await User.findOne({ email });

    //check if user exists
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    //compare passwords
    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid password" });
    }

    //Token for logged in
    const token = JWT.sign(
      { _id: user._id, username: user.username, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    // If password is valid, login successful
    res
      .status(200)
      .json({ success: true, message: "Login successful", user: user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

export default router;