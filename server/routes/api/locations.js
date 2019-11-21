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

router.post('/', (req, res) => {
	const newLocation = {
		warehouse: req.body.warehouse,
		street: req.body.street,
		city: req.body.city,
		country: req.body.country,
		number: req.body.number,
		email: req.body.email,
		categories1: req.body.categories1,
		position: req.body.position,
		actualCity: req.body.city,
		actualCountry: req.body.country,
		shortStreet: req.body.street,
		categories2: ''
	};
	locations.push(newLocation);
	helper.writeJSONFile(locationFile, locations);
	res.json(locations);
});

module.exports = router;
