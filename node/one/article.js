// var Crawler = require('./crawler')
var mysql = require('mysql');
var Crawler = require("crawler");


var crawler = new Crawler({
  rateLimit: 100,
  maxConnections: 10,
  callback: function (error, res, done) {
    if (error) {
      console.log(error);
    } else {
      // $ is Cheerio by default
      // var $ = res.$;
      var $ = res.$.load(res.body, {decodeEntities: false})
      var list = $('.one-articulo')
      console.log(res)
      // var temp = []
      list.each(function (item) {
        var _this = $(this)
        var item = {
          article: _this.find('.articulo-contenido').html(),
          title: _this.find('.articulo-titulo').text(),
          author: _this.find('.articulo-autor').text().split('/')[1],
          category: 'article',
          quote: _this.find('.comilla-cerrar').text(),
          editor: _this.find('.articulo-editor').text(),
        }
        insertMovive(item)
        console.log(item)
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
  connection.query('insert into articleTbl SET ?', list, function (error, results, fields) {
    if (error) throw error;
    console.log('articleTbl: ', results);
  });
}
var idx = 9
while (idx++ < 3763) {
  crawler.queue({
    uri: `http://wufazhuce.com/article/${idx}`, // 14 - 2398
  })
}
// connection.end();