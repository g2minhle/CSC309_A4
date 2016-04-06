var database = require('mongoose'),
    config = require('../config/database');
// connect to database
module.exports = {
    init: function() {
        database.connect(config.url);
    }
};
// wiping database
//drop database so all data is wiped off
function wipe(db){
database.connection.on('open', function(){
	module.exports = {
		init: function(){
			mongoose.connection.db.dropDatabase(function(err) {
				console.log(err)

			})
    	}
	}
})};
//closing connection
function close(){
database.connection.on('open', function(){
	module.exports = {
		init: function(){
			mongoose.connection.close(function(err) {
				console.log(err)
			})
    	}
	}
})};

var spawn = require('child_process').spawn;
var localFile;
var db;
function import(db){
// import
  collection.insert(docs,function(err, result) {
    var args = ['--db', db]
      , mongodump = spawn('/usr/local/bin/mongodump', args);
    mongodump.stdout.on('data', function (data) {
      console.log('stdout: ' + data);
    });
    mongodump.stderr.on('data', function (data) {
      console.log('stderr: ' + data);
    });
    mongodump.on('exit', function (code) {
      console.log('mongodump exited with code ' + code);
    });
  });
  }

//export
function import(db,localFile){
  var localFile;
  var db;
  collection.insert(docs,function(err, result) {
    var args = ['--db', db,localFile]
      , mongoretore = spawn('/usr/local/bin/mongorestore', args);
    mongoretore.stdout.on('data', function (data) {
      console.log('stdout: ' + data);
    });
    mongoretore.stderr.on('data', function (data) {
      console.log('stderr: ' + data);
    });
    mongoretore.on('exit', function (code) {
      console.log('mongorestore exited with code ' + code);
    });
  });
  }
