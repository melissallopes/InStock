const express = require('express');
const router = express.Router();
const locationFile = __dirname + '/../../model/locations.json';
let locations = require(locationFile);
const helper = require('../../helper/helper');
//  Get all locations
router.get('/', (req, res) => {
	res.json(locations);
});

router.get('/:warehouse', (req, res) => {
	const found = locations.some((locations) => locations.warehouse === req.params.warehouse);
	if (found) {
		res.json(locations.filter((locations) => locations.warehouse === req.params.warehouse));
	} else {
		res.status(400).json({ errorMessage: `Video with ID:${req.params.warehouse} not found` });
	}
});

module.exports = router;
