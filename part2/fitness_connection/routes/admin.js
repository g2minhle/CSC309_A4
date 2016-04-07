var express = require('express');
var router = express.Router();

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
module.exports = router;
