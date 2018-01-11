//1.导入模块
var http = require('http');
var express = require('express');
var app = express();
// var router = require('./router.js');
const DATA = require('../data.json');
var htmlRender = require('./htmlRender.js');
var path = require('path');
var bodyParser = require('body-parser');
var ejs = require('ejs');

//2.设置环境变量
app.set('port',process.env.PORT||8001);
app.set('views',__dirname + '/public');
// console.log(__dirname);
app.set('view engine','html') ;
app.engine('html',ejs.__express);

//3.注册中间件
// app.use(express.favicon());
// app.use(express.logger('dev'));
app.use(bodyParser.urlencoded());
// app.use(express.json());
// app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

//4.设置路由，处理请求
//进入首页
app.get('/',function(req,res){

	// res.writeHead(200,{'Content-Type' : 'text/plain; charset=utf-8'});
	// res.end("欢迎使用!!");
	res.render('welcome');
});
//登录。
app.get('/login',function(req,res){
	// 通过读文件的方式写网页
	// var filename = path.join(__dirname,'htmls/','login.html');
	// var login_html = htmlRender.htmlRender(filename);
	// res.send(login_html);
	// 通过内置方法渲染网页
	res.render('login');
});
app.post('/login',function(req,res){
	console.log(req.body);
	var name = req.body.username;
	var password = req.body.password;
	var users = DATA.users;
	console.log(users + " ++++ length:" + users.length);
	for(var i= 0; i < users.length; i++){
		// console.log("user:" + users[i].name);
		// console.log("password:" + users[i].password);
		if ((users[i].name === name) &&(users[i].password === password)) {
			// res.send("登录成功...");
			res.redirect('/ok');
			
		}
	}
	res.send("登陆失败！");

});
//登录。
app.get('/ok',function(req,res){
	// res.writeHead(200,{'Content-Type' : 'text/plain; charset=utf-8'});
	// var filename = path.join(__dirname,'htmls/','tast07.html');
	// var login_html = htmlRender.htmlRender(filename);
	// res.send(login_html);
	res.render('tast07');
});

//5.服务器启动
http.createServer(app).listen(app.get('port'),function(){
console.log('服务器已启动')
});