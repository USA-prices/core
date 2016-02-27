'use strict';

const express = require('express');

module.exports = function(port, path, callback) {
	const app = express();
	let mongoose = require('./config/mongoose');
	mongoose.connect();
	require('./config/express')(app);
	app.listen(port, callback);
};