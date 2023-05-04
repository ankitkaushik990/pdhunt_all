const mongoose = require("mongoose");
// const Product = require("../model/product");

exports.createProduct = async (product) => {
  try {
    await product.save();
    console.log("Product created successfully", product);
  } catch (error) {
    console.log(error);
  }
};
