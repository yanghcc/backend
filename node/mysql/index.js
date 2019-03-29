// var Crawler = require('./crawler')
var mysql = require('mysql');
var Crawler = require("crawler");

var idx = 0
var crawler = new Crawler({
  rateLimit: 2000,
    maxConnections: 10,
    callback: function (error, res, done) {
      if (error) {
          console.log(error);
      } else {
          // $ is Cheerio by default
          var $ = res.$;
          var list = $('.index-area ul li')
          // var temp = []
          list.each(function(item){
              var _this = $(this)
              var item = {
                  domain: 'http://www.tv980.com',
                  url: _this.find('a').attr('href'),
                  name: _this.find('.name').text(),
                  actor: _this.find('.actor').eq(1).text(),
                  year: _this.find('.actor').eq(2).text().split('/')[0],
                  nation: _this.find('.actor').eq(2).text().split('/')[1],
                  quality: _this.find('.other').text(),
                  poster: _this.find('.lazy').attr('data-original'),
                  type: $('.sy-title span').text()
              }
              insertMovive(item)
              console.log(item)
          })
      }
      done();
  }
});
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yang12345',
  database: 'mysql'
});

connection.connect();

connection.query('SELECT * FROM userTable', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

// 插入电影数据
function insertMovive(list) {
  connection.query('insert into comicTable SET ?', list, function (error, results, fields) {
    if (error) throw error;
    console.log('comicTable: ', results);
  });
}

while(idx++ < 21 ) {
  crawler.queue({
    // uri: `http://www.tv980.com/dianshiju/index${idx > 0 ? idx : ''}.html`, // 153
    // uri: `http://www.tv980.com/dianying/index${idx > 0 ? idx : ''}.html`, // 224
    uri: `http://www.tv980.com/dongman/index${idx > 0 ? idx : ''}.html`, // 21
    // This will be called for each crawled page
  })
}
// connection.end();