const User = require('../models/UserModel');
const debug = require('debug')('app:controllers');
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');


/* whow that async controllers are so clean! ;]*/
exports.store = async function (req, res) {
	debug("LoginController.store called");

	try {
		/* Use Joi to validate input provided by client */
		const {error} = validateLogin(req.body);
		if (error) {
			debug("Validation of input via Joi failed");
			return res.status(400).send(error.details[0].message);
		}

		/* Check if user with given email exists*/
		const user = await User.findOne({email: req.body.email});
		if (!user) {
			debug("User not found");
			return res.status(404).send("User with given e-mail not found")
		}

		/* Check password*/
		const passwordIsValid = await bcrypt.compare(req.body.password, user.password);
		if (!passwordIsValid) {
			debug("Wrong user password");
			return res.status(401).send("Password is incorrect, please, try again")
		}

		/* This method could be assigned to UserModel and thus be called
		* as User.generateAuthToken(), but CWM preferred this approach
		* look UserModel definition to figure out how this method is set
		 */
		const token = user.generateAuthToken();
		const response = {
			name: user.name,
			token: token
		};
		res.header('Content-Type', 'application/json').send(JSON.stringify(response));
	}
	catch (err) {
		debug("Error in LoginController.store", err);
		res.status(500).send(err.message);
	}
};

/* Helpers */
function validateLogin(login) {
	const schema = {
		email: Joi.string().min(5).max(50).required().email(),
		password: Joi.string().min(5).max(50).required(),
	};

	return Joi.validate(login, schema);
}