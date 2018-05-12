var path = require('path');

module.exports = {
	mode: 'development',
	entry: './app/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: __dirname,
		compress: true,
		port: 9000
	}
};