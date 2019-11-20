const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const locationsFile = __dirname + '/../../model/locations.json';

let locations = require(locationsFile);
const helper = require('../../helper/helper');

//  Get all locations
router.get('/', (req, res) => {
	res.json(locations);
=======
const inventoryFile = __dirname + "/../../model/inventory.json";

let inventory = require(inventoryFile);
const helper = require("../../helper/helper");

//  Get all locations
router.get("/", (req, res) => {
  res.json(inventory);
>>>>>>> master
});

module.exports = router;
