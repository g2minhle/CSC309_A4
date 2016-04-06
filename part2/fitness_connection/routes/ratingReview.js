var
    express = require('express'),
    auth = require('../modules/authentication/authCore'),
    ratingReviewControllers = require('../modules/ratingReview/ratingReviewControllers');

var
    router = express.Router();

router.get('/:id', 
    auth.requireLogIn,
    function(req, res) {
        ratingReviewControllers.getReviews(req, res, req.session.passport.user);
    }
);

router.post('/:id',
    auth.requireLogIn,
    function(req, res) {
        ratingReviewControllers.addReview(req, res, req.session.passport.user);
    }
);


module.exports = router;
