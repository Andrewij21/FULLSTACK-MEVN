import express from "express";
import { getUsers, register } from "../controllers/user_controller.js";
import {
  login,
  refreshToken,
  logout,
  checkUser,
} from "../controllers/auth_controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
const route = express.Router();

route.get("/", verifyToken, getUsers);
route.post("/", register);
route.post("/login", login);
route.delete("/logout", logout);
route.get("/refresh", refreshToken);
route.get("/check", checkUser);

export default route;
