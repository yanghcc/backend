var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yang12345',
  database: 'mysql'
});

connection.connect();

// 添加用户
// var user = {
//   username: 'id auto update',
//   avatar: '',
//   birthday: '2004-02-18',
//   gender: '0',
//   city: '哈尔滨市',
//   province: '黑龙江省',
//   age: 19,
//   createTime: new Date().getTime()
// };
// connection.query('insert into userTable SET ?', user, function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results);
// });

// connection.end();