const express = require("express");
const router = express.Router();
const inventoryFile = __dirname + "/../../model/inventory.json";

let inventory = require(inventoryFile);
const helper = require("../../helper/helper");

//  Get all locations
router.get("/", (req, res) => {
  res.json(inventory);
});

module.exports = router;
