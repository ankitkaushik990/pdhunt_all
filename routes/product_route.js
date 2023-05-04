const express = require("express");
const router = express.Router();
// const { createProduct } = require("../service/product_service");

const { createProduct } = require("../controller/product_controller");
router.route("/").post(createProduct);
module.exports = router;
