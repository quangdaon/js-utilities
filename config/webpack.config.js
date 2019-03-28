const path = require('path');

module.exports = function (options = { babelPlugins: [] }) {
	const { babelPlugins } = options;
	return {
		entry: {
			index: ['./src/_index.js']
		},
		mode: 'development',
		devtool: 'source-map',
		output: {
			path: path.resolve(__dirname, '../dist'),
			filename: '[name].js',
			library: 'Utils',
			libraryExport: 'default',
			libraryTarget: 'umd',
			umdNamedDefine: true
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /(node_modules|bower_components)/,
					use: [
						{
							loader: 'babel-loader',
							options: {
								presets: ['@babel/preset-env'],
								plugins: [
									...babelPlugins
								]
							}
						}
					]
				}
			]
		}
	};
};
