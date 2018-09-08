let MongoClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017'
MongoClient.connect(url, function (err, db) {
  if (err) {
    // console.log(err)
  }
  console.log("数据库已创建!")
  // db.close()
})

module.exports = MongoClient