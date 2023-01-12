import express from "express";
import userRoute from "./user_routes.js";
const route = express.Router();

route.use("/api/v1/user", userRoute);

export default route;
