import jwt from "jsonwebtoken";

export const createToken = (payload) => {
  const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "30s",
  });
  const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "1m",
  });

  return { accessToken, refreshToken };
};

export const createRefreshToken = (refreshToken) => {
  try {
    const user = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const payload = {
      userId: user.userId,
      username: user.username,
      email: user.email,
    };
    return createToken(payload);
  } catch (error) {
    throw { code: 403, msg: "Expired token" };
  }
};
