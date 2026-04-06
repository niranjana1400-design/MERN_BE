const Product = require("../models/Product");

// GET ALL PRODUCTS
exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// ADD PRODUCT
exports.addProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
};

// DELETE PRODUCT
exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
};