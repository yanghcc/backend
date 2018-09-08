let Koa = require('koa')
let app = new Koa()
let serve = require("koa-static")
let route = require('./router')
let RedisCli = require('./redisCli')
let MongoCli = require('./mongoCli')

// 静态资源服务
// app.use(serve(__dirname + "/static", {
// 	extensions: ['html']
// }))

// 加载路由中间件
app.use(route.routes()).use(route.allowedMethods())
app.listen(3000)