var database = require('mongoose'),
    config = require('../config/database');
 connect to database
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
//import 
var spawn = require('child_process').spawn;
var localFile;
var db;
var path;
function exporting(db,path){
    var args = ['--db', db, '--out', path]
      , mongodump = spawn(path+'/mongodump', args);
    mongodump.stdout.on('data', function (data) {
      console.log('stdout: ' + data);
    });
    mongodump.stderr.on('data', function (data) {
      console.log('stderr: ' + data);
    });
    mongodump.on('exit', function (code) {
      console.log('mongodump exited with code ' + code);
    });
  };

//..
function importing(db,localFilePath,localFileName){
  var localFile;
  var db;
    var args = ['--db', db,localFilePath/localFileName]
      , mongoretore = spawn(localFilePath +'/mongorestore', args);
    mongoretore.stdout.on('data', function (data) {
      console.log('stdout: ' + data);
    });
    mongoretore.stderr.on('data', function (data) {
      console.log('stderr: ' + data);
    });
    mongoretore.on('exit', function (code) {
      console.log('mongorestore exited with code ' + code);
    }
    );
  };


