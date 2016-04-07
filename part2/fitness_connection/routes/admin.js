var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/fitness_connection';

var Users = require('../models/user');

/* GET search results */
router.get('/', function(req, res, next) {
  
  res.render('page', { pageName: 'admin' });
});

router.get('/getAllUsers', function(req, res, next) {

    console.log("doing search");

    // /search?keyword=<keyword>
    console.log("Performing search for all users...");


    // Find all users
    var findTrainers = function() {
       Users.find({}, function (err, docs) {

        res.send(docs);
      });
    }
    
    findTrainers();
});

router.get('/updateInbox', function(req, res, next) {

    console.log("updating Inbox");
    console.log("Performing search for all messages...");
    // Find all messages
    var findMessages = function() {
       Messages.find({}, function (err, docs) {
        res.send(docs);
      });
    }
    findMessages();
});    
var express = require('express');
var router = express.Router();
var current_db;
var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/fitness_connection';

var Trainer = require('../models/user');

/* GET search results */
router.get('/', function(req, res, next) {
  
  res.render('page', { pageName: 'admin' });
});

router.get('/getAllUsers', function(req, res, next) {

    console.log("doing search");

    // /search?keyword=<keyword>
    console.log("Performing search for all users...");


    // Find all users
    var findTrainers = function() {
       Trainer.find({}, function (err, docs) {

        res.send(docs);
      });
    }
    
    findTrainers();
});

router.post('/setPassword', function(req, res, next) {

    console.log("Setting password")
    console.log("User id is " + req.body.id + " and pass is " + req.body.password);

    User.findOneAndUpdate({ '_id': req.body.id },
            {
                "authentication.localAuth.password" : req.body.password
            },
            function(err, user) {
                if (err) res.status(500).json({});

                if (user) {
                    res.status(200).json(user);
                } else {
                    res.status(404).json({});
                }                
            }
        );
});


router.get('/wipe', function(req, res, next) {

    console.log("wipe");

    // /search?keyword=<keyword>
    console.log("Wiping data");


    // Find all users
    var wipeData = function() {
          wipe(current_db);
      };
    wipeData();
});

module.exports = router;

