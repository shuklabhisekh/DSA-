const express = require("express");
const Product = require("../model/product.model");
const authenticate = require("../middleware/authenticate");
const router = express.Router();

router.post("/", authenticate, async (req, res) => {
  try {
    req.body.user_id = req.user._id;
    // console.log(req.user._id)
    const product = await Product.create(req.body);
    res.status(200).send(product);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const product = await Product.find().lean().exec();
    res.status(200).send(product);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
