var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/anglo';

var insertData = function(db, callback) {
    //插入数据
    var data = [{"name":'wilson001',"age":21},{"name":'wilson002',"age":22}];
    collection.insert(data, function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }
        console.log("插入成功");
        callback(result);
    });
}
var selectData = function(db, callback) {
    var collection = db.collection('anglo_coll');//连接到表
  //查询数据
  var whereStr = {};
  collection.find(whereStr).toArray(function(err, result) {
    if(err)
    {
      console.log('Error:'+ err);
      return;
    }
    console.log("查询成功");
    callback(result);
  });
}

var updateData = function(db, callback) {
    var collection = db.collection('anglo_coll');//连接到表
    //更新数据
    var whereStr = {"name":'wilson001'};
    var updateStr = {$set: { "age" : 100 }};
    collection.update(whereStr,updateStr, function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }
        console.log("更新成功");
        callback(result);
    });
}

var delData = function(db, callback) {
  //连接到表
  var collection = db.collection('anglo_coll');
  //删除数据
  var whereStr = {"z":1};
  collection.remove(whereStr, function(err, result) {
    if(err)
    {
      console.log('Error:'+ err);
      return;
    }
    console.log("删除成功");
    callback(result);
  });
}


var invokeProcData = function(db, callback) {
    //存储过程调用
    db.eval('get_tb2count()', function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }
        console.log("存储过程调用");
        callback(result);
    });
}
var get_tb2_count = function(db, callback){
  //连接到表
  var collection = db.collection('anglo_coll');
  var counter = collection.find({}).count();
  console.log(counter)
}
MongoClient.connect(DB_CONN_STR, function(err, db) {
    // updateData(db, function(result) {
    //     db.close();
    // });
    // selectData(db, function(result) {
    //     console.log(result);
    //     db.close();
    // });
    delData(db, function(result) {
        db.close();
    });
    selectData(db, function(result) {
        console.log(result);
        db.close();
    });
    get_tb2_count(db, function(result) {
        db.close();
    });
});

