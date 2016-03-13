var express = require('express'),
    passport = require('passport');

var options = { successRedirect: '/home', failureRedirect: '/' },
    router = express.Router();

router.post('/login', passport.authenticate('local', options));

router.get('/facebook', passport.authenticate('facebook'));
router.get('/facebook/callback', passport.authenticate('facebook', options));

router.get('/google/', passport.authenticate('google'));
router.get('/google/return', passport.authenticate('google', options));

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;
