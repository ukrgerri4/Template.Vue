process.env.VUE_APP_VERSION = require('./package.json').version;

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const myPlugins = process.env.NODE_ENV === 'production'
  ? [ new CleanWebpackPlugin() ]
  : [ ];

module.exports = {
	publicPath: './',
	// remove *.js.map files in dist folder
	productionSourceMap: false,
	runtimeCompiler: true,
	configureWebpack: {
		optimization: {
			runtimeChunk: "single",
			splitChunks: {
				chunks: "all",
				maxInitialRequests: Infinity,
				minSize: 0,
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name(module) {
							// get the name. E.g. node_modules/packageName/not/this/part.js
							// or node_modules/packageName
							const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

							// npm package names are URL-safe, but some servers don't like @ symbols
							return `npm.${packageName.replace("@", "")}`;
						},
					},
				},
			},
		},
		plugins: myPlugins
	},
	// devServer: {
	// 	port: 5000,
	// 	host,
	// 	allowedHosts: [
	// 		''
	// 	],
	// 	hotOnly: true,
	// 	disableHostCheck: true,
	// 	clientLogLevel: 'warning',
	// 	inline: true,
	// 	headers: {
	// 	'Access-Control-Allow-Origin': '*',
	// 	'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
	// 	'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
	// 	},
	// }
};
