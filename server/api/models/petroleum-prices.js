'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const petroleumPrice = new Schema({
	date: String,
	price: String,
	area: String
});

module.exports = mongoose.model('PetroleumPrice', petroleumPrice);