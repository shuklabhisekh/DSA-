const express = require("express");
const Product = require("../model/product.model");
const authenticate = require("../middleware/authenticate");
const router = express.Router();

router.post("/", authenticate, async (req, res) => {
  try {
    req.body.user_id = req.user._id;
    const product = await Product.create(req.body);
    return res.status(200).send(product);
  } catch (error) {
    return res.status(400).send({ message: "invalid" });
  }
});

router.get("/", async (req, res) => {
  try {
    const product = await Product.find().lean().exec();
    return res.status(200).send(product);
  } catch (error) {
    return res.status(400).send({ message: "invalid" });
  }
});

module.exports = router;
