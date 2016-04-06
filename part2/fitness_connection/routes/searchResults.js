var 
    express = require('express'),
    Trainer = require('../models/user');

var 
    router = express.Router();
    
/* GET search results */
router.get('/', function(req, res, next) {

  console.log('got the request here');
  res.render('page', { pageName: 'searchResults' });
});

router.get('/:keyword', function(req, res, next) {
    //search?keyword=<keyword>
    console.log("Performing search for keyword: " + req.params.keyword);
    Trainer.find({ $or: [ 
            {"location" : req.params.keyword }, 
            {"firstName" : req.params.keyword },
            {"lastName" : req.params.keyword }]}, 
            function (err, docs) {
                res.send(docs);
            }
    );
});    

module.exports = router;
