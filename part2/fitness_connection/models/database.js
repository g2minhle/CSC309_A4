var database = require('mongoose'),
    config = require('../config/database');

module.exports = {
    init: function() {
        database.connect(config.url);
    }
};
// wiping database
//drop database so all data is wiped off

database.connection.on('open', function(){
	module.exports = {
		init: function(){
			mongoose.connection.db.dropDatabase(function(err) {
				console.log(err)
			})
    	}
	}
});
//closing connection
database.connection.on('open', function(){
	module.exports = {
		init: function(){
			mongoose.connection.close(function(err) {
				console.log(err)
			})
    	}
	}
});
// exporting data from one database to another 
var query;
var collection;
var firstDatabase;
var otherDatabase

init:function(query,collection,firstDatabase,otherDatabase){
	firstDatabase.collection.find({query}).forEach(function(d)
		{ firstDatabase.getSiblingDB(otherDatabase)
			[collection].insert(d)});
	firstDatabase.collection.find({query}).forEach(function(d){
	});
	firstDatabase.collection.remove({query});
}

//importing data from one database to another 

init:function(query,collection,firstDatabase,otherDatabase){
	otherDatabase.collection.find({query}).forEach(function(d)
		{ otherDatabase.getSiblingDB(firstDatabase)
			[collection].insert(d)});
	otherDatabase.collection.find({query}).forEach(function(d){
	});
	otherDatabase.collection.remove({query});
}
