const { request } = require("express");
const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Category = mongoose.model("Category");
const { ObjectID } = require("bson");
const Product = mongoose.model("Product");

router.get("/category/", (req, res) => {
  res.render("main/client/all-product");
});

router.get("/all-product-by-category", async (req, res) => {
  let number = Number(req.query.page);
  let totalProduct = await Product.find({
    categoryName: req.query.categoryName,
  });
  let data = await Product.find({ categoryName: req.query.categoryName })
    .limit(12)
    .skip((number - 1) * 12);
  res.send([data, totalProduct.length]);
});

module.exports = router;
