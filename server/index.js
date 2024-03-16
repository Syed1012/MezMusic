// server/index.js

import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import authRoutes from "./routes/auth.js";

// configure env
dotenv.config();

//calling express module through function.
const app = express();

//Middleware
app.use(express.json());
app.use(cors());

// connection for MONGODB - (DATABASE)
connectDB();

// User registration and login routes
app.use("/api/auth", authRoutes);

// Testing / route
app.get("/",(req, res)=>{
  return res.json("Welcome to MezMusic");
})


// PORT
const PORT = 5109;

//listen to the PORT
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});