const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	
	mode: 'development',
	devtool: 'inline-source-map',
	watch: true
	
	// devServer: {
	// 	contentBase: __dirname,
	// 	compress: true,
	// 	port: 9000
	// }

});