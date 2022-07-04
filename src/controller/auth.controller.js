const jwt = require("jsonwebtoken");
const User = require("../model/user.model");
require("dotenv").config();
// console.log(process.env.SECRET_KEY);
const newToken = (user) => {
  return jwt.sign({ user }, process.env.SECRET_KEY);
};
const register = async (req, res) => {
  let user = await User.findOne({ email: req.body.email }).lean().exec();
  if (user) {
    return res.status(400).send({ message: "The email already exist" });
  }
  user = await User.create(req.body);

  const token = newToken(user);

  return res.send({ user, token });
};

const login = (req, res) => {
    let user = await User.findOne({ email: req.body.email }).lean().exec();
    if (!user) {
      return res.status(400).send({ message: "The email already exist" });
    }
    
  
  return res.send("Login");
};

module.exports = { register, login };
