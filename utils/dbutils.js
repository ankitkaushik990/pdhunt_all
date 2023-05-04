const mongoose = require("mongoose");
// require("dotenv").config();
const initDB = () => {
  mongoose
    .connect(process.env.URI)
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = { initDB };
