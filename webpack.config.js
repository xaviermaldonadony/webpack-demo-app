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
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};
