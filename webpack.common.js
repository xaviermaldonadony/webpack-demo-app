const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// optional takes out eval from output js and it's easier to read not required
	// devtool: 'none',
	entry: {
		main: './src/index.js',
		vendor: './src/vendor.js',
	},
	plugins: [new HtmlWebpackPlugin({ template: './src/template.html' })],
	module: {
		rules: [
			{
				// test: /\.css$/,
				test: /\.scss$/,
				use: [
					'style-loader', // 3. Inject styles into Dom
					'css-loader', // 2. Turns css into commonjs
					'sass-loader', // 1. Turns sass into css
				],
			},
			{
				test: /\.html$/,
				use: ['html-loader'],
			},
			{
				test: /\.(svg|png|jpg|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[hash].[ext]',
						outputPath: 'imgs',
					},
				},
			},
		],
	},
};
