const express = require("express");
const connect = require("./src/config/db");
const app = express();
const productController = require("./src/controller/product.controller");
const { register, login } = require("./src/controller/auth.controller");
app.use(express.json());

app.use("/products", productController);
app.post("/register", register);

app.post("/login", login);

app.listen(4000, async () => {
  try {
    await connect();
  } catch (err) {
    console.log(err.message);
  }
  console.log("listening on 4000");
});
