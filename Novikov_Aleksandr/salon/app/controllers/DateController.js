/* TODO
* 1. In a perfect world, constants should be stored in configuration files instead of
* hardcoding them here
* 2. Split logic into helpers
 */

const debug = require('debug')('app:controllers');
const moment = require('moment');

const SALON_OPENS = 10;
const SALON_CLOSES = 21;
const ENLIST_TIME_THRESHOLD = 2; // If it is 2pm now we start to enlist customer only to 4pm
const ENLIST_DAY_THRESHOLD = 7; // How much days ahead of current date we accept enlists
const TIMEZONE_OFFSET = 3;

exports.index = async function (req, res) {
	debug("DateController.index called");

	const today = date().minutes(0).seconds(0);
	const days = [];

	let counter = 0;

	if (getCurrentDay()) {
		days.push(getCurrentDay())
		counter++;
	}

	for (counter; counter <= ENLIST_DAY_THRESHOLD; counter++) {
		day = {
			id: counter,
			day: today.add(1, 'days').hours(SALON_OPENS).format(),
			closes: SALON_CLOSES
		};
		days.push(day);
	}

	// console.log(days);
	res.header('Content-Type', 'application/json').send(days);
};

function date() {
	// console.log(moment().utc().add(3, 'hours'));
	return moment().utc().add(TIMEZONE_OFFSET, 'hours');
}
function getCurrentDay() {
	let start;

	/* If evening - return false, enlisting for today is closed*/
	if (date().add(ENLIST_TIME_THRESHOLD, 'hours').hours() > SALON_CLOSES)
		return false;

	/* If morning - set start to open hour*/
	if (date().hours() < SALON_OPENS)
		start = SALON_OPENS;
	/* If day - set start to current time + hour threshold*/
	else {
		// console.log("afd");
		start = date().add(ENLIST_TIME_THRESHOLD, 'hours').hours()
	}

	return {
		id: 0,
		day: date().hours(start).minutes(0).seconds(0).format(),
		closes: SALON_CLOSES
	}
}

exports = date;
