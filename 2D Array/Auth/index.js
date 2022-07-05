const express = require("express");
const connect = require("./src/config/db");
const { register, login } = require("./src/controller/auth.controller");
const productController = require("./src/controller/product.controller");
const app = express();
app.use(express.json());
app.use("/products", productController);
app.post("/register", register);
app.post("/login", login);
app.listen(4000, async (req, res) => {
  try {
    await connect();
  } catch (error) {
    console.log(error);
  }
  console.log("Running");
});
