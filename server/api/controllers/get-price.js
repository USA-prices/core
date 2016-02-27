'use strict';

const express = require('express');
const router = express.Router();
const PetroleumPrice = require('./../models/petroleum-prices');

router.route('/get-price')
	.get(function(req, res) {
		let area = req.query.area;
		PetroleumPrice.find({area: area}, function(err, items) {
			if (err) {
				res.send(err);
			}

			res.json({
				results: items,
				status: 'ok'
			});
		});
	});

module.exports = router;