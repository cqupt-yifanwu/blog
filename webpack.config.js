var webpack = require('webpack')
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
		      		presets: ['es2015','react'],  // 这部分内容可以单独写成一个babelrc文件
		      		"env": {
	      			"development": {
	    			    "plugins": [
	    			    	["react-transform", {
			    			    "transforms": [{
			    			       	"transform": "react-transform-hmr",

			    			       	"imports": ["react"],

			    		        	"locals": ["module"]
			    			       }]
			    			    }
			    			]
			            ]
			  		}
	      		}
		      	}
	      	},
		    {
		        test: /\.css$/,
		        loader: "style-loader!css-loader?modules"
		    }
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()//热加载插件
	],
	resolve: {
	    extensions: ['', '.js', '.jsx']
	},
	devServer: {    
	    contentBase: "./public",//本地服务器所加载的页面所在的目录
	    colors: true,//终端中输出结果为彩色
	    historyApiFallback: true,//不跳转
	    inline: true//实时刷新
	} 
};