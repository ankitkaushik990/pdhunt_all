const mongoose = require("mongoose");
// const Product = require("../model/product");

exports.createUser = async (user) => {
  await user.save();
  console.log("User created successfully 1", user);
};
