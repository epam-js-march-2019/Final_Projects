/*TODO
* 1. add validation to ensure user dont create record for
* arbitrary services
* 2. Current implementation stores dates as string in DB and
* uses moment.js to convert that strings to date, maybe use
* mongoDB Date field for storing dates, instead of simple string?
 */

const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const moment = require('moment');

const recordSchema = new mongoose.Schema({
	service: {
		type: String,
		required: true,
		minlength: 1,
		maxlength: 50,
	},
	date: {
		type: String,
		minlength: 1,
		maxlength: 100,
		required: true
	}
});

let RecordModel;
try {
	RecordModel = mongoose.model('Record', recordSchema);
}
catch(err) {
	RecordModel = mongoose.model('Record');
}

function validateRecord(record) {
	const schema = {
		service: Joi.string().min(1).max(50).required(),
		date: Joi.string().min(1).max(100).required(),
	};

	return Joi.validate(record, schema);
}


module.exports.RecordModel = RecordModel;
module.exports.recordSchema = recordSchema;
module.exports.validateRecord = validateRecord;