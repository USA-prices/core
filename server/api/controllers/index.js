'use strict';

const express = require('express');
const router = express.Router();

router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});

router.use(require('./get-price'));
router.use(require('./area'));

router.get('/', function(req, res) {
	res.json({ message: 'Welcome to our api!' });
});

module.exports = router;