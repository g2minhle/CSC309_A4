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
database.connection.on('open', function close(){
	module.exports = {
		init: function(){
			mongoose.connection.close(function(err) {
				console.log(err)
			})
    	}
	}
})};
// finding selected documents and making collection


// exporting data from one database to another 
var query;
var collection;
var firstDatabase;
var otherDatabase

function export(query,collection,firstDatabase,otherDatabase){
	firstDatabase.collection.find({query}).forEach(function(d)
		{ firstDatabase.getSiblingDB(otherDatabase)
			[collection].insert(d)});
	firstDatabase.collection.find({query}).forEach(function(d){
	});
	firstDatabase.collection.remove({query});
}

//importing data from one database to another 

function import(query,collection,firstDatabase,otherDatabase){
	otherDatabase.collection.find({query}).forEach(function(d)
		{ otherDatabase.getSiblingDB(firstDatabase)
			[collection].insert(d)});
	otherDatabase.collection.find({query}).forEach(function(d){
	});
	otherDatabase.collection.remove({query});
}
