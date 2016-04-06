var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/fitness_connection';

var Trainer = require('../models/user');

/* GET search results */
router.get('/', function(req, res, next) {

  console.log('got the request here');
  res.render('page', { pageName: 'searchResults' });
});

router.get('/:keyword', function(req, res, next) {

    console.log("doing search");
    // Insert dummy trainer data
    var insertDummy = function() {

      var names = ["Adam", "Bob", "Candice", "Dennis", "Early"];

      for (var i = 0; i < 5; i++) {

        var newTrainer = Trainer({
        userid: i,
        firstName: names[i],
        price: 50.00,
        rating: 5
        });

        newTrainer.save(function(err) {
          if (err) console.log(err);

          console.log("Saved dummy trainer");
        });      
      };
    }
    
    // /search?keyword=<keyword>
    console.log("Performing search for keyword: " + req.params.keyword);


    // Do smart search algo based on user location and trainer location for recommended trainers
    var findTrainers = function() {
       Trainer.find({ $or: [ {"location" : req.params.keyword }, {"firstName" : req.params.keyword },
                             {"lastName" : req.params.keyword }]}, function (err, docs) {

        res.send(docs);
      });
    }
    
    insertDummy();
    findTrainers();

});    

module.exports = router;
