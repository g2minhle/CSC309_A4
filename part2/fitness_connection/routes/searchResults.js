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

    //res.render('page', { pageName: 'users' });

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
    console.log("Performing search for keyword: " + req.query.keyword);


    // Do smart search algo based on user location and trainer location for recommended trainers
    var findTrainers = function() {
       Trainer.find({}, function(err, users) {
        if (err) console.log(err);

        for (var i = 0; i < users.length; i++) {
          console.log(users[i].firstName);
        }
      })
    };
    
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

    });*/
});    

module.exports = router;
