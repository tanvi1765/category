const express = require("express");

const categoryRoute = require("./category.route");
const router = express.Router();

router.use("/category",categoryRoute);
module.exports = router;