//进入首页
exports.index = function(req,res){
	res.writeHead(200,{'Content-Type' : 'text/plain; charset=utf-8'});
	res.end("欢迎使用!!");
};

exports.login = function(req,res){
	res.writeHead(200,{'Content-Type' : 'text/plain; charset=utf-8'});
	res.end("欢迎使用!!");
}