'use strict';

const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');

const expressApp =
	/**
	 * Initializes express app
	 * @param {Object} app
	 */
	function(app) {
		app.use(bodyParser.urlencoded({ extended: true }));
		app.use(bodyParser.json());
		app.use(express.static('public'));
		app.use('/api', require('../api/controllers'));
		//@todo make it smarter
		app.use('/map', function(req, res, next) {
			return res.sendfile('public/index.html');
		});
	};

module.exports = expressApp;