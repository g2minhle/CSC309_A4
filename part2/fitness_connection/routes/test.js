var
    express = require('express');

var
    router = express.Router(),    
    User = require('../models/user');

// Insert dummy trainer data
var insertDummy = function() {

    var names = ["Adam", "Bob", "Candice", "Dennis", "Early"];

    for (var i = 0; i < 5; i++) {

        var newTrainer = User({
            userid: i,
            firstName: names[i],
            price: 50.00,
            rating: 2
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
