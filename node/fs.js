/*
* @Author: hucheng.yang
* @Date:   2017-03-26 22:37:57
* @Last Modified by:   hucheng.yang
* @Last Modified time: 2017-03-26 23:02:44
*/

'use strict';
var foo = 'bar';
function f(argument) {
	console.log('hello node')
}
console.log(foo);
f();

//file 写入和读取模块
var fs = require('fs')

//写入文件方法两个参数分别是：目标文件路径， 文件内容 + 回调函数
fs.writeFile('./data/data.js', 'new file gaga', function(err){
	if (err) {
		return console.log('err: write file err.')
	}
	console.log('success')
})
//文件读取方法：目标文件路径 + 回调函数
fs.readFile('./data/data.js', function(err,data){
	if (err) {
		throw err;
	}
	console.log(data.toString())
})