var
    express = require('express'),
    auth = require('../modules/authentication/authCore'),
    bookingControllers = require('../modules/booking/bookingControllers');

var
    router = express.Router();

router.get('/pages/createBooking/:id', 
    auth.requireLogIn,
    function(req, res) {
        res.render('pageWithUserId', {
            pageName: 'createBooking',
            userId: req.params.id
        });
    }
);

router.get('/pages/my/bookings', 
    auth.requireLogIn,
    function(req, res) {
        res.redirect('/booking/pages/bookings/' + req.session.passport.user);
    }
);

router.get('/pages/bookings/:id', 
    auth.requireLogIn,
    auth.requireOwnership,
    function(req, res) {        
        res.render('pageWithUserId', {
            pageName: 'bookingListing',
            userId: req.params.id
        });
    }
);

router.get('/:id', 
    auth.requireLogIn,
    auth.requireOwnership,
    function(req, res) {
        bookingControllers.getBookings(req, res);
    }
);

router.post('/',
    auth.requireLogIn,
    function(req, res) {
        bookingControllers.addBookings(req, res);
    }
);

module.exports = router;
