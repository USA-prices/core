'use strict';

const path = require('path');
const rootPath = path.normalize(__dirname + '/../..');

module.exports = {
	root: rootPath,
	port: process.env.PORT || 3000,
	db: process.env.MONGOHQ_URL,
	api_key: process.env.API_KEY,
	api_url: process.env.API_URL
};