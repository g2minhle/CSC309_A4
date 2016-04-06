var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;

var mongoose = require('mongoose');
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
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
       Trainer.find({"location" : req.body.location }, function (err, docs) {

        // Get top 3 hits
        var recommendations = docs.slice(0, 3);
        res.send(recommendations);
      });
    }
    
    insertDummy();
    findTrainers();

   // var temp = findTrainer(function() {
    //  console.log(temp);

   // });

    //console.log(temp);
     /* temp.toArray(function(err, docs) {
          console.log(docs);
          if (docs.length != 0) {
              res.send(docs[0]);
          } else {
              res.send({});
          }
      });

    });

    for (var i = 0; i < recommendations.length; i++) {
          console.log(recommend[i].firstName);
        }

    res.send(recommend);*/
});    

module.exports = router;
