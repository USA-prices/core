'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const area = new Schema({
	name: String,
	iso_code: String
});

module.exports = mongoose.model('Area', area);