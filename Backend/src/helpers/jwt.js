import jwt from "jsonwebtoken";

export const createToken = (payload) => {
  const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "30s",
  });
  const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "1d",
  });

  return { accessToken, refreshToken };
};

export const createRefreshToken = (refreshToken) => {
  console.log(refreshToken);
  const user = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
  if (!user) throw { code: 403, msg: "Expired token" };
  const payload = {
    userId: user.userId,
    username: user.username,
    email: user.email,
  };
  return createToken(payload);
};
