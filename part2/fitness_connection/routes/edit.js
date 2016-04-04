var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/fitness_connection';


/* GET users edit page */
router.get('/:id', function(req, res, next) {
    // Fetch user profile picture and existing data here.
    var findUser = function(db, callback) {
       var cursor = db.collection('users').find( {"userid": req.params.id});
       cursor.each(function(err, doc) {
          assert.equal(err, null);
          if (doc != null) {
             console.dir(doc);
          } else {
             console.log('No user by that id');
             callback();
          }
       });
    };
    
    MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);
      findUser(db, function() {
          db.close();
      });
    });
    
    // Take data that was fetched and add it to page. (TODO)
    
    res.render('page', { pageName: 'edit' });
});

/* GET save changes on edit page. */
router.post('/savechanges/:id', function(req, res) {
    console.log("Saving changes made by the user.");
    console.log(req.body);

    var updateUser = function(db, callback) {
       db.collection('users').updateOne(
          { "userid" : req.params.id },
          {
            $set: { "firstName": req.body.firstName,
                    "lastName": req.body.lastName,
                    "isTrainer": req.body.isTrainer,
                    "profilePictureURL": req.body.profilePictureURL,
                    "sports": req.body.sports,
                    "location": req.body.location,
                    "experience": req.body.experience
                    //"trainerProfile.$.price": req.body.price,
                    //"trainerProfile.$.availability": req.body.availability,
                    //"trainerProfile.$.education": req.body.education,
                    //"trainerProfile.$.workexp": req.body.workexp,
                    //"trainerProfile.$.awards": req.body.awards,
                    //"trainerProfile.$.otherinfo": req.body.otherinfo
                  },
          }, function(err, results) {
          console.log(err);
          callback();
       });
    };
    
   MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);

      updateUser(db, function() {
          db.close();
      });
    });

});

module.exports = router;
