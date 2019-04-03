// var Crawler = require('./crawler')
var mysql = require('mysql');
var Crawler = require("crawler");


var crawler = new Crawler({
  rateLimit: 10,
  maxConnections: 10,
  callback: function (error, res, done) {
    if (error) {
      console.log(error);
    } else {
      // $ is Cheerio by default
      var $ = res.$;
      var list = $('.tab-content')
      // var temp = []
      list.each(function (item) {
        var _this = $(this)
        var item = {
          motto: _this.find('.one-cita').text(),
          category: 'article',
          type: _this.find('.one-imagen-leyenda').text(),
          serial: _this.find('.one-titulo').text(),
          imgUrl: _this.find('img').attr('src'),
          editTime: new Date($('.one-pubdate').text().trim().replace(/\s+/g, ' '))
        }
        insertMovive(item)
        // console.log(item)
      })
    }
    done();
  }
});
var connection = mysql.createConnection({
  host: '39.104.121.9',
  user: 'root',
  password: 'Yang12345_',
  database: 'one'
});

connection.connect();

// 插入电影数据
function insertMovive(list) {
  connection.query('insert into mottoTbl SET ?', list, function (error, results, fields) {
    if (error) throw error;
    console.log('mottoTbl: ', results);
  });
}
var idx = 14
while (idx++ < 2368) {
  crawler.queue({
    uri: `http://wufazhuce.com/one/${idx}`, // 14 - 2398
  })
}
// connection.end();