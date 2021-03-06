const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	
	entry: './app/main.js',

	plugins: [
		new CleanWebpackPlugin(['dist'])
	],	

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	}
	
};