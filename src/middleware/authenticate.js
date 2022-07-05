var jwt = require("jsonwebtoken");
require("dotenv").config();
const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) return reject(err);
      resolve(user);
    });
  });
};

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res
      .status(400)
      .send({ message: "You are not authorized or invaid" });
  }

  if (!req.headers.authorization.startsWith("Bearer ")) {
    return res
      .status(400)
      .send({ message: "You are not authorized or invaid" });
  }

  let token = req.headers.authorization.split(" ")[1];
  let user;
  try {
    user = await verifyToken(token);
  } catch (error) {
    return res
      .status(400)
      .send({ message: "You are not authorized or invaid" });
  }
  req.user = user.user
  next();
};
