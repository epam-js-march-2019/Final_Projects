const webpack = require('webpack');
const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'public');
const SRC_DIR = path.resolve(__dirname, 'src');

const config = {
	entry: SRC_DIR + '/index.js',
	output: {
		path: DIST_DIR,
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js?/,
				include: SRC_DIR,
				loader: 'babel-loader',
				query: {
					presets: ['@babel/preset-env', '@babel/preset-react']
				}
			},
		]
	}
};


module.exports = config;