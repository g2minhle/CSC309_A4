var express = require('express'),
    passport = require('passport');

var
    router = express.Router(),

    options = {
        successRedirect: '/index',
        failureRedirect: '/auth/signIn',
        failureFlash: true
    };

router.get('/signIn', function(req, res, next) {
    res.render('pageWithFlash', { 
        pageName: 'signIn',
        message: req.flash('loginMessage') 
    });
});

router.get('/signUp', function(req, res, next) {
    res.render('pageWithFlash', { 
        pageName: 'signUp',
        message: req.flash('signupMessage') 
    });
});

router.post('/local/signup', passport.authenticate('local-signup', options));
router.post('/local/login', passport.authenticate('local-login', options));

router.get('/facebook', passport.authenticate('facebook'));
router.get('/facebook/callback', passport.authenticate('facebook', options));

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;
