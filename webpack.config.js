const path = require('path');
module.exports = {
	mode: 'development',
	// optional takes out eval from output js and it's easier to read not required
	// devtool: 'none',
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
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
		],
	},
};
