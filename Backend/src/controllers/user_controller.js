import user from "../models/user_model.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
  try {
    return res
      .status(200)
      .json({ users: await user.find({}, { password: 0 }) });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const checkEmail = await user.findOne({ email });
    if (checkEmail) throw { code: 409, msg: "Email already exist" };
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await user.create({
      username,
      email,
      password: hashPassword,
    });
    return res.status(200).json({ status: 200, message: "Success" });
  } catch (error) {
    res
      .status(error.code || 500)
      .json({ error: error.msg || error.toString() });
  }
};
