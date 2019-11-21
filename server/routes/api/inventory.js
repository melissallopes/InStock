const express = require("express");
const router = express.Router();
const inventoryFile = __dirname + "/../../model/inventory.json";

let inventory = require(inventoryFile);
const helper = require("../../helper/helper");

//  Get all inventories
router.get("/", (req, res) => {
  res.json(inventory);
});

router.get("/:item", (req, res) => {
  const found = inventory.some(inventory => inventory.item === req.params.item);
  if (found) {
    res.json(inventory.filter(inventory => inventory.item === req.params.item));
  } else {
    res.status(400).json({ errorMessage: `Item:${req.params.item} not found` });
  }
});

module.exports = router;
