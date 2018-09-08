let redis = require("redis")
let	client = redis.createClient("6379", "127.0.0.1")
let foo
// client.set("jsonKey", JSON.stringify('json'), redis.print);
client.on("error", function (err) {
	console.log("redis client连接失败", err)
})
client.on('ready', function (res) {
	// console.log('client ready')
})
client.on('connect', function () {
	foo = client.get('foo', function (err, reply) {
		foo = reply
		console.log("第三次读取到的值：", err, reply)
	})
	// client.set("let_1", "let_1_val", redis.print)
	// let read_let = client.get("let_1")
	// console.log("读取到的值：" + read_let)
	// client.set("let_2", "let_2_val", function () {
	// 	let read_let_2 = client.get("let_2")
	// 	console.log("第二次读取到的值：" + read_let_2)
	// })
	// client.set("let_3", "let_3_val", function () {
	// 	let read_let_3 = client.get("let_3", function (err, reply) {
	// 		console.log("第三次读取到的值：", err, reply)
	// 	})
	// })
	//client.quit()
})
client.on("error", function (err) {
	console.log("Error " + err)
})

module.exports = client