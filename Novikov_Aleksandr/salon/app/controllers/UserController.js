/* TODO
* 1. Use express-async-errors + error middleware for catching errors
* instead of manually catching them in every controller
*
* 2. Use winston to log errors instead of current implementation
*
* 3. Don't send some internal error messages to client, replace
* them with smth more generic instead
*
* 4. Rewrite controllers with async/await implementation
* to clean up the code
*
* 5. validation messages should send all validation errors, not
* only the 1st one (maybe send them as json object, not as text)
*
* 6. due to avoid promise hell, we use sync functions to hash passwords
* that decreases perfomance
 */

const User = require('../models/UserModel');
const mongoose = require('mongoose');
const debug = require('debug')('app:controllers');
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');

/* Not used, may contain errors, refactor before adding to use*/
exports.index = function (req, res) {
	debug("UserController.index called");
	user.find()
		.then(result => {
			debug("Users found");
			res.send(result)
		})
		.catch(err => sendSeverError(res, err))
};

/* Not used, may contain errors, refactor before adding to use*/
exports.show = function (req, res) {
	if (checkId(req.params.id, res)) return;

	user.findById(req.params.id)
		.then(user => {
			if (!user) {
				debug(`user ${req.params.id} not found`);
				sendNotFound(res);
			}
			else {
				debug(`user ${req.params.id} found`);
				res.send(user);
			}
		})
		.catch(err => sendSeverError(res, err))
};

/* Register new user [in use]*/
exports.store = function (req, res) {
	debug("UserController.store called");

	/* Use Joi to validate input provided by client */
	const {error} = validateUser(req.body);
	if (error) {
		debug("Validation of input via Joi failed");
		return res.status(400).send(error.details[0].message);
	}

	/* Check if that user already exist */
	User.findOne({email: req.body.email})
		.then(user => {
			if (user) {
				debug("User already exist");
				return res.status(400).send("User already exist");
			}

			/* Create password hash [replace that with async when refactoring] */
			let salt = bcrypt.genSaltSync(10);
			let hashedPass = bcrypt.hashSync(req.body.password, salt);

			/* Create new user */
			user = new User({
				name: req.body.name,
				phone: req.body.phone,
				email: req.body.email,
				password: hashedPass
			});
			user.save()
				.then(result => {
					debug("New user created");
					const token = user.generateAuthToken();
					const response = {
						name: user.name,
						token: token
					};
					res.header('Content-Type', 'application/json').send(JSON.stringify(response));
					/* Send token in header */
					// res.header('x-auth-token', token).send("Successfully registered");
				})
				.catch(err => {
					debug("Model validation failed", err.message);
					return res.status(400).send(err.message);
				})
		})
		.catch(err => {
			debug(err.message);
			return res.status(500).send(err.message);
		});
};

/* Not used, may contain errors, refactor before adding to use*/
exports.update = function (req, res) {
	if (checkId(req.params.id, res)) return;

	const {error} = validateUser(req.body);
	if (error) {
		debug("Validation of input via Joi failed");
		return res.status(400).send(error.details[0].message);
	}

	user.findById(req.params.id)
		.then(user => {
			if (!user) {
				debug(`user ${req.params.id} not found`);
				sendNotFound(res);
			}
			else {
				debug(`user ${req.params.id} was found`);
				user.set({
					isGold: req.body.isGold,
					name: req.body.name,
					phone: req.body.phone
				});
				user.save()
					.then(result => res.send(result))
					.catch(err => {
						debug("Model validation failed", err.message);
						return res.status(400).send(err.message);
					});
			}
		})
		.catch(err => sendSeverError(res, err))
};

/* Not used, may contain errors, refactor before adding to use*/
exports.destroy = function (req, res) {
	if (checkId(req.params.id, res)) return;

	user.findById(req.params.id)
		.then(user => {
			if (!user) {
				debug(`user ${req.params.id} not found`);
				sendNotFound(res);
			}
			else {
				debug(`user ${req.params.id} was found`);
				user.remove()
					.then(result => {
						debug(`user ${req.params.id} was deleted`);
						res.send(result);
					})
					.catch(err => {
						debug("Error while deleting user", err.message);
						res.status(500).send(err.message)
					})
			}
		})
		.catch(err => sendSeverError(res, err))
};

/* Helpers */
function checkId(id, res) {
	if (!mongoose.Types.ObjectId.isValid(id)) {
		debug("checkId failed");
		res.status(400).send("Invalid user ID");
		return true;
	}
	debug("checkId passed");
	return false;
}

function sendNotFound(res) {
	res.status(404).send('user with the given ID was not found.');
}

function sendSeverError(res, err) {
	debug("Internal server error:\n", err.message);
	res.status(500).send(err.message);
}

function validateUser(user) {
	const schema = {
		email: Joi.string().min(5).max(50).required().email(),
		password: Joi.string().min(5).max(50).required(),
		name: Joi.string().min(5).max(50).required(),
		phone: Joi.number().required(),
	};

	return Joi.validate(user, schema);
}