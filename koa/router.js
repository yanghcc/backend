const route = require('koa-router')();
let fs = require('fs')
let json = JSON.parse(fs.readFileSync(__dirname + '/ad.json'))
let index = fs.readFileSync(__dirname + '/static/index.html')
let logger = require('./log')

const main = ctx => {
  ctx.response.type = 'html'
  ctx.body = index
};
const info = async (ctx, next) => {
  let req = ctx.request
  let text
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  // 日志记录
  logger.info(`${ctx.method} ${ctx.url} - ${ms}ms ${ctx.ip}`)
  switch (req.path) {
    case '/log':
      text = new Date()
      break
    case '/api/info':
      text = json
      break
    default:
      text = '这是服务器默认返回的数据。-_-!'
  }
  ctx.body = text
};
route.get('/', main);
route.get('/api/info', info) // 路由存在优先级问题
module.exports = route