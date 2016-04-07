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

module.exports = router;
