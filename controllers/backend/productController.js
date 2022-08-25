const { request } = require("express");
const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Category = mongoose.model("Category");
const Product = mongoose.model("Product");
const multer = require("multer");
const path = require("path");
var fs = require("fs");

const { ObjectID } = require("bson");

let arrayImage = [];

router.get("/admin/product", (req, res) => {
  res.render("main/admin/list-product", { layout: "./layouts/containerAdmin" });
});

router.get("/admin/product/get-all-product", async (req, res) => {
  let data = await Product.find({});
  res.send(data);
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/product/");
  },

  filename: function (req, file, cb) {
    let nameImage = Date.now() + ".jpg";
    arrayImage.push(nameImage);
    cb(null, nameImage);
  },
});

var upload = multer({ storage: storage });

router.post(
  "/admin/product/add-product",
  upload.array("multi-files"),
  (req, res) => {
    let product = new Product();
    product.productName = req.body.productName;
    product.categoryName = req.body.categoryName;
    product.price = req.body.price;
    product.discount = req.body.discount;
    product.information = req.body.information;
    product.describe = req.body.describe;
    product.image = arrayImage;
    product.dateCreate = req.body.dateCreate;
    product.save();
    arrayImage = [];
    res.redirect("/admin/product");
  }
);

router.post("/admin/product/edit-product", async (req, res) => {
  await Product.updateOne(
    { _id: ObjectID(req.body.productId) },
    {
      $set: {
        productName: req.body.productName,
        price: req.body.price,
        discount: req.body.discount,
        information: req.body.information,
        describe: req.body.describe,
        dateCreate: req.body.dateCreate,
      },
    }
  );
  res.redirect("/admin/product");
});

router.get("/admin/get-product-detail", async (req, res) => {
  let data = await Product.findOne({ _id: ObjectID(req.query.id) });
  res.send(data);
});

router.get("/admin/category/edit-category", async (req, res) => {
  let categoryName = req.query.categoryName;
  let id = req.query.id;
  await Category.updateOne(
    { _id: ObjectID(id) },
    { $set: { categoryName: categoryName } }
  );
  res.send("success");
});

router.get("/admin/product/remove-product", async (req, res) => {
  let id = req.query.id;
  let ObjImage = await Product.findOne({ _id: ObjectID(id) });
  let arrayImage = ObjImage.image;
  for (let i = 0; i < arrayImage.length; i++) {
    let filePath = process.cwd() + "/public/images/product/" + arrayImage[i];
    fs.unlinkSync(filePath);
  }
  await Product.remove({ _id: ObjectID(id) });
  res.send("success");
});

module.exports = router;
