// server/routes/auth.js
import express from "express";
import User from "../models/User.js";
import { hashPassword, comparePassword } from "../helpers/authHelper.js"; // Assuming you have a function to compare passwords

// now we can use router variable for GET, POST, UPDATE, DELETE routes and using routes
const router = express.Router();

//Eg. below of user Registration

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
      password,
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

export default router;