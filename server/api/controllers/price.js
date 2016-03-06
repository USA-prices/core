'use strict';

const express = require('express');
const mongoose = require('mongoose');
const responseHelper = require('./../../helpers/response');
const PetroleumPrice = require('./../models/petroleum-prices');
const router = express.Router();

mongoose.Promise = Promise;

router.route('/price')
	.get(function(req, res) {
		let area = req.query.area;

		PetroleumPrice.find({area: area})
			.then(list => responseHelper.responseOk.call(res, list))
			.catch(err => responseHelper.responseError.call(res, err));
	});

module.exports = router;