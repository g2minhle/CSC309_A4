var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/fitness_connection';

/* GET users listing. */
router.get('/:id', function(req, res, next) {
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
    
    res.render('page', { pageName: 'users' });
});

    

module.exports = router;
