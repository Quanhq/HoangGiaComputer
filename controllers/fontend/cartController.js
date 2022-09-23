const { request } = require("express");
const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Product = mongoose.model("Product");
const Category = mongoose.model("Category");


router.get('/cart', (req, res) => {
  res.render('main/client/cart')
})


module.exports = router;
