'use strict';

const _ = require('underscore');
const dotenv = require('dotenv');

dotenv.load();
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Load app configuration
module.exports = _.extend(
	require(__dirname + '/../config/env/all.js'),
	require(__dirname + '/../config/env/' + process.env.NODE_ENV + '.json') || {});