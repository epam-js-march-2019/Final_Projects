/* TODO
* 1. Current implementation uses custom function to validate if date
* provided by client is in valid range, in a perfect world,
* all validation logic must be in one place, thus  this should be done
* by Joi. Check if that is possible to add custom validators to Joi
*
* 2. Date validation logic uses same constants
* that are defined in DateController - BAD practice
* Should put them into one separate file (config)*
 */

const debug = require('debug')('app:controllers');
const {RecordModel: Record, validateRecord} = require('../models/RecordModel');
const moment = require('moment');
const User = require('../models/UserModel');

/*
* Should receive: {
* 	service: String
* 	date: String
* }
 */

exports.store = async function (req, res) {
	try {
		debug("RecordController.store called");
		debug("Authenticated user: ", req.user);
		// debug(typeof req.body.date); //String

		/* Validate if user sent correct record params*/
		const {error} = validateRecord(req.body);
		if (error) {
			debug("Record Joi validation failed");
			return res.status(400).send(error.details[0].message);
		}

		/* Validate if the date provided is in allowed range */
		const dateIsValid = validateDate(req.body.date);
		if (!dateIsValid) {
			debug("User provided incorrect date");
			return res.status(400).send("Date provided is incorrect, please, try again");
		}

		// debug("User: ", User);
		/* Find user in database */
		const user = await User.findById(req.user.id);
		if (!user) {
			debug("User not found in database ");
			return res.status(404).send("User not found, try to re-login")
		}

		/* Create new record (it is not saved to DB, only created)*/
		const record = new Record({
			service: req.body.service,
			date: req.body.date
		});

		/* Modify user records and save user do DB*/
		user.records.push(record);
		await user.save();
		res.send(`You have successfully enlisted for ${req.body.service}`);
	}
	catch(err) {
		res.status(500).send(err.message)
	}
};

exports.index = async function (req, res) {
	debug("RecordController.index called");
	try {
		let user = await User.findById(req.user.id);
			if (!user)
				return res.status(400).send("User not found, try to relog");

		/* Update user past records based on current time */
		const now = moment().utc().add(TIMEZONE_OFFSET, 'hours');

		// debug(user.records);
		// debug(user);
		// debug("typeof user.pastRecords", user.pastRecords instanceof Array);

		const toOld = user.records.filter(record => {
			return moment(record.date).utc().isBefore(now);
		});
		debug("toOld:: ", toOld);

		const toCurrent = user.records.filter(record => {
			return moment(record.date).utc().isAfter(now);
		});
		debug("toCurrent:: ", toCurrent);

		debug("user.pastRecords:: ", user.pastRecords);
		user.pastRecords = user.pastRecords.concat(toOld);
		debug("user.pastRecords after concat:: ", user.pastRecords);
		user.records = toCurrent;
		user = await user.save();

		let records;
		if (req.query.type == 'past')
			records = user.pastRecords;
		else
			records = user.records;

		res.send(records);
	}
	catch(err) {
		res.status(500).send(err.message)
	}
};

/* Date validation helpers, should be moved to separate file*/

const SALON_OPENS = 10;
const SALON_CLOSES = 21;
const ENLIST_TIME_THRESHOLD = 2;
const ENLIST_DAY_THRESHOLD = 7;
const TIMEZONE_OFFSET = 3;

function date() {
	return moment().utc().add(TIMEZONE_OFFSET, 'hours').minutes(0).seconds(0);
}

const minDate = date().add(ENLIST_TIME_THRESHOLD, 'hours');
const maxDate = date().add(ENLIST_DAY_THRESHOLD, 'days').hours(SALON_CLOSES);

/*
* If creating date with moment() from string - apply utc() method to get date
* as utc, even if string was encoded by moment utc object
* If creating a date with moment() using moment utc object,
* no need to apply utc() method - object created will be in utc() mode
 */
function validateDate(date) {
	date = moment(date).utc();
	// debug("date", date);
	// debug("minDate", minDate);
	// debug("moment(minDate)", moment(minDate));
	if (moment(date).isBefore(maxDate) && moment(date).isAfter(minDate))
		return true;
	return false;
}