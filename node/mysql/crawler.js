var Crawler = require("crawler");

var c = new Crawler({
    maxConnections: 10
});

// Queue a list of URLs
// c.queue(['http://www.google.com/','http://www.amazon.com']);

// // Queue URLs with custom callbacks & parameters
// c.queue([{
//     uri: 'http://parishackers.org/',
//     jQuery: false,

//     // The global callback won't be called
//     callback: function (error, res, done) {
//         if(error){
//             console.log(error);
//         }else{
//             console.log('Grabbed', res.body.length, 'bytes');
//         }
//         done();
//     }
// }]);
module.exports = c