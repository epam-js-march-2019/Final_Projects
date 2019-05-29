const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const history = require('connect-history-api-fallback');
const routes = require('./routes/routes');
const config = require('config');

// HTTP request logging middleware
app.use(morgan('dev'));

// HTTP request body parsers
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Public directory for serving files (e.g. bundle.js)
app.use(express.static('public'));
// SPA history api fallback middleware
app.use(history({
	verbose: true,
	index: '/',
	htmlAcceptHeaders: ['text/html']
}));
// app.use((req, res, next) => {
// 	console.log(req.originalUrl);
// 	console.log(req.originalUrl.match(/api/));
// 	if (req.originalUrl.match(/api/)) {
// 		return next();
// 	} else {
// 		app.use(history({verbose: true, index: '/'}))
// 	}
// });

// Main app routes
	app.use(routes);
// Check if JSON Web Token env variable is set in the environment
	if (!config.get('jwtPrivateKey')) {
		console.error(`FATAL ERROR:
	JSON Web Token private key is not set in environment variable.
	Server is terminating`);
		process.exit(1);
	}

	mongoose.connect(config.get('db'), { useNewUrlParser: true })
		.then(() => console.log('Connected to MongoDB...'))
		.catch(err => console.error(err));

	const port = config.get('PORT');
	app.listen(port, () => console.log(`Listening on port ${port}...`));

	module.exports = app;