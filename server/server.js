'use strict';

const express = require('express');

module.exports = function() {

	let server;
	let mongoose;
	let connection;

	/**
	 * Starts server
	 * @param {string} port
	 * @param {string} path
	 * @param {Function} callback
	 */
	function start(port, path, callback) {
		let app = express();
		mongoose = require('./config/mongoose');
		connection = mongoose.connect();
		require('./config/express')(app);
		server = app.listen(port, callback);
	}

	/**
	 * Stops server
	 */
	function stop() {
		if (server && mongoose) {
			mongoose.disconnect(connection);
			server.close();
		}
	}

	return {
		start: start,
		stop: stop
	};
};