const jwt = require('jsonwebtoken');
const config = require('config');
const debug = require('debug')('app:controllers');

/* */
function auth(req, res, next) {
	debug("auth middleware called");

	const token = req.header('x-auth-token');
	if (!token) {
		debug("Authentication failed, user did not provide x-auth-token");
		return res.status(401).send("Access denied. No token provided");
	}

	try {
		/* verifies token signature provided by client with the key stored
		* in environment variable */
		const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
		/* 'decoded' variable contains all information about user that was
		* added to token upon its creation
		* (look UserModel->generateAuthToken)	*/
		req.user = decoded; //req.user.name is now available
		debug("User authentication succeeded", decoded);
		next();
	}
	catch(ex) {
		debug("User authentication faled: wrong token provided");
		res.status(400).send('Invalid token 123');
	}
}

module.exports = auth;