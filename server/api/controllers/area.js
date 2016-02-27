'use strict';

const express = require('express');
const router = express.Router();
const Area = require('./../models/area');
const config = require('./../../config/config');

router.route('/area')
	.get(function(req, res) {
		Area.find(function(err, items) {
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