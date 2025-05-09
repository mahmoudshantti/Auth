import express from "express";
import authRoute from "./routers/auth.router.js";
import dotenv from "dotenv";
import { connectDb } from "./config/connectDb.config.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";
dotenv.config();

const app = express();

const PORT = process.env.PORT;

// Middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

//routes
app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
  connectDb();
});
