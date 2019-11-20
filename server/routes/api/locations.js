const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const locationFile = __dirname + '/../../model/inventory.json';

let locations = require(locationFile);
const helper = require('../../helper/helper');
=======
const locationsFile = __dirname + "/../../model/locations.json";

let locations = require(locationsFile);
const helper = require("../../helper/helper");
>>>>>>> master

//  Get all locations
router.get("/", (req, res) => {
  res.json(locations);
});

router.get('/:warehouse', (req, res) => {
	console.log('fefe');
	console.log(req.params.warehouse);
	const found = inventory.some((locations) => locations.warehouse === req.params.warehouse);
	if (found) {
		res.json(inventory.filter((locations) => locations.warehouse === req.params.warehouse));
	} else {
		res.status(400).json({ errorMessage: `Video with ID:${req.params.warehouse} not found` });
	}
});

module.exports = router;
