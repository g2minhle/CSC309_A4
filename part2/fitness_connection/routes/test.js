var
    express = require('express');

var
    router = express.Router(),    
    User = require('../models/user');

// Insert dummy trainer data
var insertDummy = function() {

    var names = ["Adam", "Bob", "Candice", "Dennis", "Early"];
    var sports = ["Swimming", "Running", "Baseball", "Basketball", "Hockey"];
    var locations = ["Toronto", "Calgary", "Toronto", "Toronto", "Montreal"];
    var prices = [20, 30, 40, 50, 60];
    var ratings = [1, 2, 3, 4, 5];

    for (var i = 0; i < 5; i++) {

        var newTrainer = User({
            userid: i,
            firstName: names[i],
            price: prices[i],
            rating: ratings[i],
            sports: sports[i],
            location: locations[i]
        });

        newTrainer.save(function(err) {
            if (err) console.log(err);

            console.log("Saved dummy trainer");
        });
    };
}

/* GET users listing. */
router.get('/', function(req, res) {
    insertDummy();
});

module.exports = router;
