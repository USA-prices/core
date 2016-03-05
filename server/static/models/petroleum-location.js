'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const petroleumLocation = new Schema({
	name: String,
	req_code: String
});

module.exports = mongoose.model('PetroleumLocation', petroleumLocation);