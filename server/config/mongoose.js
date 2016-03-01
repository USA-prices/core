'use strict';

const mongoose = require('mongoose');
const config = require('./config');

function connect(options) {
	mongoose.connect(config.db);

	const db = mongoose.connection;

	db.on('error', function (err) {
		console.log('Connection error:', err.message);
	});

	db.once('open', function callback () {
		console.log("Connected to DB!");
	});

	return mongoose;
}

function disconnect(mongoose) {
	mongoose.connection.close();
}

module.exports = {
	connect: connect,
	disconnect: disconnect
};