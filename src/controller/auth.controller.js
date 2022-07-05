var jwt = require("jsonwebtoken");
const User = require("../model/user.model");
require("dotenv").config();
const newToken = (user) => {
  return jwt.sign({ user }, process.env.SECRET_KEY);
};

const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user)
      return res.status(400).send({ message: "Please try another email id " });

    user = await User.create(req.body);
    const token = newToken(user);
    return res.status(200).send({ user, token });
  } catch (error) {
    res.status(400).send({ message: "Check your email and password" });
  }
};

const login = async (req, res) => {
  try {
    // return res.send("Login");
    let user = await User.findOne({ email: req.body.email });
    if (!user)
      return res
        .status(400)
        .send({ message: "Please check your email and password " });
    const match = user.checkpassword(req.body.password);
    if (!match)
      return res
        .status(400)
        .send({ message: "Please check your email and password " });
    const token = newToken(user);
    return res.status(200).send({ user, token });
  } catch (error) {
    res.status(400).send({ message: "Check your email and password" });
  }
};

module.exports = { register, login };
