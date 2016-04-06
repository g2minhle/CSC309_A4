var database = require('mongoose'),
    config = require('../config/database');

module.exports = {
    init: function() {
        database.connect(config.url);
    }
};
// wiping database
//drop database so all data is wiped off

mongoose.connection.on('open', function(){
	module.exports = {
		init: function(){
			mongoose.connection.db.dropDatabase(function(err) {
				console.log(err)
			})
    	}
	}
});
//closing connection
mongoose.connection.on('open', function(){
	module.exports = {
		init: function(){
			mongoose.connection.close(function(err) {
				console.log(err)
			})
    	}
	}
});
