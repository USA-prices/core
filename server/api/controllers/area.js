'use strict';

const express = require('express');
const mongoose = require('mongoose');
const Area = require('./../models/area');
const responseHelper = require('./../../helpers/response');
const router = express.Router();

mongoose.Promise = Promise;

router.route('/areas')
	.get(function(req, res) {
		Area.find()
			.then(items => responseHelper.responseOk.call(res, items))
			.catch(err => responseHelper.responseError.call(res, err));
	});

module.exports = router;