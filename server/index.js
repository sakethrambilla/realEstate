import express from "express";
import colors from "colors";
import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./config/db.js";
import userRouter from "./routes/user.route.js";

connectDB();
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to backend" });
});

app.use("/api/user", userRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
