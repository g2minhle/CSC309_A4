var
    express = require('express'),
    authCore = require('../modules/authentication/authCore'),
    Trainer = require('../models/user');

var
    router = express.Router();

/* GET search results */
router.get('/', function(req, res, next) {
    res.render('page', { pageName: 'recommendations' });
});

router.get('/getRecommendations', function(req, res, next) {
    // Do smart search algo based on user location and trainer location for recommended trainers
    Trainer.find({ "location": req.body.location }, function(err, docs) {

        // Get top 3 hits
        var recommendations = docs.slice(0, 3);
        res.send(recommendations);
    });
});

module.exports = router;
