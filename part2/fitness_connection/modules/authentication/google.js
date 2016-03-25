var config = require('../../config/authentication'),
    passport = require('passport'),
    GoogleStrategy = require('passport-google').Strategy;

function createNewUser(profile, token) {
    // if there is no user found with that facebook id, create them
    var newUser = new User();

    // set all of the relevant information
    newUser.google.id = profile.id;
    newUser.google.token = token;
    newUser.google.name = profile.displayName;

    // save our user to the database
    newUser.save(function(err) {
        if (err)
            throw err;

        // if successful, return the new user
        return done(null, newUser);
    });
}

function authenticationSucceed(token, refreshToken, profile, done) {
    process.nextTick(function() {
        // find the user in the database based on their facebook id
        User.findOne({ 'google.id': profile.id }, function(err, user) {

            // if there is an error, stop everything and return that
            // ie an error connecting to the database
            if (err)
                return done(err);

            // if the user is found, then log them in
            if (user) {
                return done(null, user); // user found, return that user
            } else {
                createNewUser(profile, token);;
            }
        });
    });
}

passport.use(new GoogleStrategy(config.googleConfig, authenticationSucceed));