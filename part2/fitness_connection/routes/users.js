var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    res.render('page', { pageName: 'users' });
    //res.send('respond with a resource for user id: ' + req.params.id);
});

module.exports = router;
