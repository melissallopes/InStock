const express = require('express');
const router = express.Router();
const locationsFile = __dirname + '/../../model/locations.json';

let locations = require(locationsFile);
const helper = require('../../helper/helper');

//  Get all locations
router.get('/', (req, res) => {
	res.json(locations);
});

module.exports = router;
