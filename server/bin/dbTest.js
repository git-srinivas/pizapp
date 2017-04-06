require('events').EventEmitter.prototype._maxListeners = 100;

var path = require('path');
var app = require(path.resolve(__dirname, '../server'));

var dataSource = app.dataSources.db_mysql;

var tables = [  
  "Test"

];

dataSource.autoupdate(tables, function(err) {
  if (err) throw err;

  console.log('Tables [' + tables + '] created in ', dataSource.adapter.name);
  dataSource.disconnect();
});