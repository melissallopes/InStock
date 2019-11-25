const express = require("express");
const router = express.Router();
var path = require("path");
const inventoryFile = path.join(__dirname, "../../model", "inventory.json");
// const inventoryFile = __dirname + "/../../model/inventory.json";
const invent = path.join(__dirname, "../../model", "invent.json");

let inventory = require(inventoryFile);
const helper = require("../../helper/helper");

//  GET all inventories
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

//POST

router.post("/", (req, res) => {
  const newItem = {
    item: req.body.item,
    ordered: req.body.ordered,
    location: req.body.location,
    quantity: req.body.quantity,
    status: req.body.status,
    description: req.body.description
  };
  inventory.push(newItem);
  helper.writeJSONFile(inventoryFile, inventory);
  res.json(inventory);
});

//PUT
router.put("/:item", (req, res) => {
  const requestItem = req.params.item;
  const product = inventory.filter(product => {
    return product.item == requestItem;
  });

  const index = inventory.indexOf(product[0]);
  //check to see which of the keys are coming in
  const keys = Object.keys(req.body);
  keys.forEach(key => {
    product[0][key] = req.body[key];
  });

  inventory[index] = product[0];

  helper.writeJSONFile(inventoryFile, inventory);
  res.json(inventory);
});

//DELETE

router.delete("/", (req, res) => {
  const found = inventory.some(inventor => inventor.name === req.params.name);
  if (found) {
    const itemAfterDeletion = inventory.filter(
      inventor => inventor.name === req.param.name
    );
    helper.writeJSONFile(inventoryFile, itemAfterDeletion);
    res.json({
      msg: `Item with name: ${req.params.name} deleted`,
      inventory: itemAfterDeletion
    });
  }
});

module.exports = router;
