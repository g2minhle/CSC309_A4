var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/fitness_connection';


/* GET users edit page */
router.get('/:id', function(req, res, next) {
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
