var fs = require('fs');

exports.htmlRender = function(filename){
	return fs.readFileSync(filename).toString();
};