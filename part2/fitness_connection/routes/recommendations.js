var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/fitness_connection';

var Trainer = require('../models/user');

/* GET search results */
router.get('/', function(req, res, next) {

  res.render('page', { pageName: 'recommendations' });
});

router.get('/getRecommendations', function(req, res, next) {

    // Insert dummy trainer data
    var insertDummy = function() {

      var names = ["Adam", "Bob", "Candice", "Dennis", "Early"];

      for (var i = 0; i < 5; i++) {

        var newTrainer = Trainer({
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
    
    // Do smart search algo based on user location and trainer location for recommended trainers
    var findTrainers = function() {
       Trainer.find({"location" : req.body.location }, function (err, docs) {

        // Get top 3 hits
        var recommendations = docs.slice(0, 3);
        res.send(recommendations);
      });
    }
    
    insertDummy();
    findTrainers();

});    

module.exports = router;
