/*
* @Author: black
* @Date:   2017-03-30 15:38:12
* @Last Modified by:   black
* @Last Modified time: 2017-03-30 19:11:42
*/

var http = require('http')
var cheerio = require('cheerio')
var url = 'http://www.imooc.com/learn/348'

var courseData = []
//设计数据结构如下：
// [{
// 	articleTitle:'',
// 	video:[
// 		{
// 			vTitle:'',
// 			vid: ''
// 		}
// 	]
// }]
function handlData(html) {
	var $ = cheerio.load(html);
	var chapters = $('.mod-chapters').children();
	chapters.each(function(el) {
		var self = $(this)
    var articleTitle = self.find('strong').text().replace(/\s/g,'');
    var vs = self.find('.video').children();
    var article = {
    	articleTitle: articleTitle,
    	videos: []
    }
    vs.each(function(el) {
    	var vd = $(this).find('.J-media-item').text().replace(/\s/g,'');
    	var vid = $(this).attr('data-media-id');
    	article.videos.push({
    		vTitle: vd,
    		vid: vid
    	})
    });
		console.log(article)
    // courseData.push(article)
	});
}

http.get(url,function (res) {
	var html = ''
	res.on('data',function(data){
		html += data;
	})
	res.on('end',function(){
		// console.log(html);
		handlData(html);
	})
}).on('error',function(){
	console.info('get data err!');
})