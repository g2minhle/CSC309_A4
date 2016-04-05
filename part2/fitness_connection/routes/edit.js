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
router.post('/savechanges/:id', function(req, res) {
    console.log("Saving changes made by the user.");
    console.log(req.body);

    var insertDocument = function(db, callback) {
   db.collection('users').insertOne( {
    "userid": 5, 
    "firstName": "first",
                    "lastName": "name",
                    "isTrainer": true,
                    "sports": "temp sports",
                    "email": "",
                    "phone": "",
                    "location": "",
                    "experience": "",
                    "price": 0,
                    "education": "",
                    "workexp": ""

  }, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the restaurants collection.");
    callback();
  });
};


    var updateUser = function(db, callback) {
       db.collection('users').updateOne(
          { "userid" : Number(req.body.userid) },
          {
            $set: { "firstName": req.body.firstName,
                    "lastName": req.body.lastName,
                    "isTrainer": req.body.isTrainer,
                    "sports": req.body.sports,
                    "email": req.body.email,
                    "phone": req.body.phone,
                    "location": req.body.location,
                    "experience": req.body.experience,
                    "price": req.body.price,
                    "education": req.body.education,
                    "workexp": req.body.workexp
                  },
          }, function(err, results) {
          console.log("No error");
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
