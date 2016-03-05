'use strict';

const mongoose = require('mongoose');
const config = require('./config');

/**
 * Connects to db
 * @return {Object}
 */
function connect() {
	mongoose.connect(config.db);

	const db = mongoose.connection;

	db.on('error', function (err) {
		console.log('Connection error:', err.message);
	});

	db.once('open', function callback () {
		console.log('Connected to DB!');
	});

	return mongoose;
}

/**
 * Disconnects from db
 * @param {Object} dbConnection
 */
function disconnect(dbConnection) {
	dbConnection.connection.close();
}

module.exports = {
	connect: connect,
	disconnect: disconnect
};