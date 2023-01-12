import user from "../models/user_model.js";
import bcrypt from "bcrypt";
import { createToken, createRefreshToken } from "../helpers/jwt.js";
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await user.findOne({
      email,
    });
    if (!userExist) throw { code: 404, msg: "Email not found." };
    const isPassword = await bcrypt.compare(password, userExist.password);
    if (!isPassword) throw { code: 401, msg: "Wrong Password" };
    const payload = {
      userId: userExist._id,
      username: userExist.username,
      email: userExist.email,
    };
    const token = createToken(payload);
    res.cookie("refresh_token", token.refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(200).json({ status: 200, accessToken: token.accessToken });
  } catch (error) {
    res.status(error.code || 500).json({
      status: error.code || 500,
      message: error.msg || error.toString(),
    });
  }
};

export const refreshToken = (req, res) => {
  try {
    const RT = req.cookies.refresh_token;
    if (!RT) throw { code: 401, msg: "Null token" };
    const tokens = createRefreshToken(RT);
    res.cookie("refresh_token", tokens.refreshToken, { httpOnly: true });
    res.status(200).json({ status: 200, accessToken: tokens.accessToken });
  } catch (error) {
    res.status(error.code || 500).json({
      status: error.code || 500,
      message: error.msg || error.toString(),
    });
  }
};

export const logout = (req, res) => {
  try {
    res.clearCookie("refresh_token");
    res.status(200).json({ status: 200, message: "refresh token deleted" });
  } catch (error) {
    res.status(error.code || 500).json({
      status: error.code || 500,
      message: error.msg || error.toString(),
    });
  }
};
