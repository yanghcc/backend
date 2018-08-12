var Koa = require('koa')
var fs = require('fs')
var redis = require("redis"),
	client = redis.createClient("6379", "127.0.0.1")
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017"
var app = new Koa()
var serve = require("koa-static")
var index = fs.readFileSync(__dirname + '/static/index.html')
// mongo
MongoClient.connect(url, function (err, db) {
	if (err) {
		console.log(err)
	}
	console.log("数据库已创建!")
	db.close()
})
// redis
client.set("string key", "string val", redis.print)
client.on("error", function (err) {
	console.log("redis client连接失败", err)
})
client.on('ready', function (res) {
	console.log('client ready')
})
var foo
client.on('connect', function () {
	foo = client.get('foo', function (err, reply) {
		foo = reply
		console.log("第三次读取到的值：", err, reply)
	})
	// client.set("var_1", "var_1_val", redis.print)
	// var read_var = client.get("var_1")
	// console.log("读取到的值：" + read_var)
	// client.set("var_2", "var_2_val", function () {
	// 	var read_var_2 = client.get("var_2")
	// 	console.log("第二次读取到的值：" + read_var_2)
	// })
	// client.set("var_3", "var_3_val", function () {
	// 	var read_var_3 = client.get("var_3", function (err, reply) {
	// 		console.log("第三次读取到的值：", err, reply)
	// 	})
	// })
	//client.quit()
})
client.on("error", function (err) {
	console.log("Error " + err)
})

// app.use(serve(__dirname + "/static", {
// 	extensions: ['html']
// }))

app.use(ctx => {
	let req = ctx.request
	// ctx.response.type = 'html'
	let text = ''
	switch (req.url) {
		case '/log':
			text = new Date()
			break
		case '/sb':
			text = '你才是sb！！狗日的'
			break
		default:
			text = '这是服务器默认返回的数据。-_-!'
	}
	ctx.body = foo
})
app.listen(3000)