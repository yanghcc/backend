/*
* @Author: hucheng.yang
* @Date:   2017-03-26 23:05:55
* @Last Modified by:   black
* @Last Modified time: 2017-03-27 16:09:33
*/

var http = require('http')
var fs = require('fs')
//创建一个服务器。主要做三件事
//1.接收请求
//2.处理请求
//3.发送响应
var server = http.createServer();
server.on('request',function(request,response){
	var url = response.url
	//两个参数：响应码，请求头对象

	// if(url = '/css'){
	// 	response.writeHead(200,{
	// 		'Content-Type':'text/css'
	// 	})
	// 	fs.readFile('./css/hello.css',function(err,data){
	// 		if (err) {
	// 			throw err
	// 		}
	// 		response.end(data)
	// 	})
	// }
	response.writeHead(200,{
		'Content-Type':'text/html'
	})
	fs.readFile('./hello.html',function(err,data){
		if (err) {
			throw err
		}
		response.end(data)
	})
	// console.log(request)
	// console.log('get request')
	// response.write('<h2>hello world</h2>')
	// response.end()
})
//绑定一个端口，开启监听
server.listen(9999,function(){
	console.log('server is running in port 9999');
})
