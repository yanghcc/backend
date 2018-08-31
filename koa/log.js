// npm i -S winston
// const logger = require('koa-logger') 
// const morgan = require('morgan')
// let fs = require('fs')
// let path = require('path')
// app.use(logger((str, args) => {
// 	console.log(str)
// 	fs.appendFile(path.join(__dirname, 'test.log'), str + '\r\n', (err) => {
// 		if (!err) console.log('追加内容完成')
// 	})
// }))
// create a write stream (in append mode)
// let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})

// setup the logger
// app.use(morgan('combined', {stream: accessLogStream}))
const log4js = require('log4js');

log4js.configure({
  appenders: {
    cheese: {
      type: 'dateFile',
      filename: 'logs/request',
      pattern: '-yyyy-MM-dd.log',
      //包含模型
      alwaysIncludePattern: true,
    }
  },
  categories: {
    default: {
      appenders: ['cheese'],
      level: 'info'
    }
  }
});

const logger = log4js.getLogger();
// logger.setLevel( process.env.NODE_ENV !== 'production' ? 'DEBUG' : 'ERROR')
module.exports = logger;