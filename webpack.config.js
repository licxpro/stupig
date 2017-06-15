var path = require('path');

var Paths = {
	'dist':path.join(__dirname,'dist/'),
	'index':path.join(__dirname,'src/app/index.jsx')
};
var config = {
	entry:{
		index:Paths.index
	},
	output:{
		path:Paths.dist,
		filename:"app/[name].js"
	},
	module:{
		loaders:[{
			test:/\.jsx?$/,
			exclude:/node_modules/,
			loader:'babel-loader',
			query: {
	          presets: ['react', 'es2015']
	        }
		}]
	}
};
module.exports = config;