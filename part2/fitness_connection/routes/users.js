var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/fitness_connection';

/* GET users listing. */
router.get('/:id', function(req, res, next) {
        
    res.render('page', { pageName: 'users' });
});

router.get('/fetch/:id', function(req, res, next) {
    console.log("Fetching for userid: " + req.params.id);
    var users = [];
    var findUser = function(db, callback) {
       var cursor = db.collection('users').find({"userid" : 3} );
       return cursor;
       cursor.each(function(err, doc) {
          assert.equal(err, null);
          if (doc != null) {
             return doc;
             users.push(doc);
          } else {
             //console.log('No user by that id');
             callback();
          }
       });
       return users;
    };
    
    MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);
      var temp = findUser(db, function() {
          db.close();
      });

      temp.toArray(function(err, docs) {
          if (docs.length != 0) {
              res.send(docs[0]);
          } else {
              res.send({});
          }
      });

    });

});
    

module.exports = router;
