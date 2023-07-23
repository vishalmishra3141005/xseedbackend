

const express = require("express");

const route = express.Router();

route.use("/apis", require("./apis"));

module.exports = route;