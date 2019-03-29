var mongoDbConnection = require('./connection.js');

exports.index = function(req, res, next) {
  mongoDbConnection(function(databaseConnection) {
    databaseConnection.collection('anglo_coll', function(error, collection) {
      collection.find().toArray(function(error, results) {
        console.log(results)
      });
    });
  });
};
