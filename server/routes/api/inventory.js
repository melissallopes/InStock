const express = require('express');
const router = express.Router();
const inventoryFile = __dirname + '/../../model/inventory.json';

let inventory = require(inventoryFile);
const helper = require('../../helper/helper');

//  Get all inventories
router.get('/', (req, res) => {
	res.json(inventory);
});

router.get('/:item', (req, res) => {
	const found = inventory.some((inventory) => inventory.item === req.params.item);
	if (found) {
		res.json(inventory.filter((inventory) => inventory.item === req.params.item));
	} else {
		res.status(400).json({ errorMessage: `Item:${req.params.item} not found` });
	}
});

router.post('/', (req, res) => {
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

module.exports = router;
