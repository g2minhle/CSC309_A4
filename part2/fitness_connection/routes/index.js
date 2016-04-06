var
    express = require('express'),
    passport = require('passport'),
    authCore = require('../modules/authentication/authCore');

var
    router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('page', { pageName: 'index' });
});

module.exports = router;
