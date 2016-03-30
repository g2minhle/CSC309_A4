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
       var cursor = db.collection('users').find( {"id": req.params.id});
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
router.post('/savechanges', function(req, res) {
    console.log("SAVING CHANGES");
    console.log(req.body);
    
    var updateUser = function(db, callback) {
       db.collection('users').updateOne(
          { "id" : req.id },
          {
            $set: { "firstName": req.firstName,
                    "lastName": req.lastName,
                    "isTrainer": req.isTrainer,
                    "profilePictureURL": req.profilePictureURL,
                    "sports": req.sports,
                    "location": req.location,
                    "experience": req.experience,
                    "trainerProfile.$.price": req.price,
                    "trainerProfile.$.availability": req.availability,
                    "trainerProfile.$.education": req.education,
                    "trainerProfile.$.workexp": req.workexp,
                    "trainerProfile.$.awards": req.awards,
                    "trainerProfile.$.otherinfo": req.otherinfo
                  },
          }, function(err, results) {
          //console.log(results);
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
