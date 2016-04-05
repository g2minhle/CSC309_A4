var config = require('../../config/authentication'),
    facebook = require('./facebook'),
    local = require('./local'),
    passport = require('passport'),    
    session = require('express-session'),
    User = require('../../models/user');;


// used to serialize the user for the session
passport.serializeUser(function(user, done) {
    done(null, user._id);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {    
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

module.exports = {
    init: function(app) {
        // session secret
        app.use(session({
            secret: config.sessionSecret,
            resave: true,
            saveUninitialized: true
        }));
        app.use(passport.initialize());
        // persistent login sessions
        app.use(passport.session());
    }
};

