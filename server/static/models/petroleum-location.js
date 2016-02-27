var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PetroleumLocation = new Schema({
	name: String,
	req_code: String
});

module.exports = mongoose.model('PetroleumLocation', PetroleumLocation);