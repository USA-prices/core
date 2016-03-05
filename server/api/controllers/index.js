'use strict';

const express = require('express');
const responseHelper = require('./../../helpers/response');
const router = express.Router();

router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});

router.use(require('./price'));
router.use(require('./area'));

router.get('/', function(req, res) {
	responseHelper.responseMessage.call(res);
});

module.exports = router;