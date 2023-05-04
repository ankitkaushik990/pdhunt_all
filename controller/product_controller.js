// const product = require("../model/product");
const Product = require("../model/product");
const product_service = require("../service/product_service.js");

const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      icon,
      url,
      shortDesc,
      iamges,
      createdBy,
      updatedBy,
    } = req.body;
    let product = new Product({
      name,
      description,
      icon,
      url,
      shortDesc,
      iamges,
      createdBy,
      updatedBy,
    });
    console.log("In POST product " + product);
    await product_service.createProduct(product);

    res.status(201).send({ message: "Product created successfully" });
  } catch (error) {
    console.log("error in product post ", error);
    res.status(400).send({ message: error.message });
  }
};

module.exports = { createProduct };
