module.exports = {
	entry: [
	  './public/assets/js/entry.js'
	],
	output: {
		path: __dirname + '/public/assets/',
		publicPath: "/public/assets/",
		filename: 'bundle.js'
	},
	module: {
		loaders: [
		  	{
		      	test:/\.js$/,
		      	exclude:/node_modules/,
		      	loader: 'babel',
		      	query: {
		      		presets: ['es2015','react']   // 这部分内容可以单独写成一个babelrc文件
		      	}
	      	}
		]
	}
};