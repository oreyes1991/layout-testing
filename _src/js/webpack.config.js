
const path = require("path");
const webpack = require("webpack");
const webpack_rules = [];
console.log(__dirname);
const webpackOption = {
	entry: "./main/index.js",
	output: {
		path: path.resolve("../../assets/js"),
		filename: "map.js",
	},
	module: {
		rules: webpack_rules
	}
};
let babelLoader = {
	test: /\.js$/,
	exclude: /(node_modules|bower_components)/,
	use: {
		loader: "babel-loader"
	},
	include: [
		/\/node_modules\/@rebelstack-io\/metaflux/
	]
};
webpack_rules.push(
	{
		test: /\.css$/,
		use: [ 'style-loader', 'css-loader' ]
	}
)
webpack_rules.push(babelLoader);
module.exports = webpackOption;
