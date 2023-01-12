import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes/index.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 5000;

// CONNECT TO DB
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, () => console.info("Connect to DB"));

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "*" }));
app.use(routes);

app.listen(PORT, () => console.info("Server is listening...."));
