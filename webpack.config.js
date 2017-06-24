var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var Paths = {
	'dist':path.join(__dirname,'dist/'),
	'index':path.join(__dirname,'src/app/index.jsx')
};
var config = {
	devtool:'eval-source-map',
	entry:{
		index:Paths.index,
		vendor:['react','react-dom','./src/lib/Dispather.js','./src/lib/BaseController.js','./src/lib/BaseComponent.jsx']

	},
	output:{
		path:Paths.dist,
		filename:"app/[name].js"
	},
	module:{
		loaders:[{
			test:/(\.jsx|\.js)$/,
			exclude:/node_modules/,
			loader:'babel-loader'
		}]
	},
	plugins:[
		new HtmlWebpackPlugin({
			title:'stupig',
			template:'./src/www/index.html'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name:"vendor",
			filename:"[name].js",
		})
	 
	]
};
module.exports = config;
