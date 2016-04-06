var passport = require('passport'),    
    FacebookStrategy = require('passport-facebook').Strategy,
    config = require('../../config/authentication'),
    User = require('../../models/user');

function createNewUser(profile, token, done) {    
    console.log(profile);
    // if there is no user found with that facebook id, create them
    var newUser = new User();

    // set all of the facebook information in our user model
    // set the users facebook id
    newUser.authentication.facebookAuth.id = profile.id;
    // we will save the token that facebook provides to the user                   
    newUser.authentication.facebookAuth.token = token;
    // look at the passport user profile to see how names are returned
    newUser.firstName = profile.name.givenName;
    newUser.lastName = profile.name.familyName;

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
        User.findOne({ 'authentication.facebookAuth.id': profile.id }, function(err, user) {

            // if there is an error, stop everything and return that
            // ie an error connecting to the database
            if (err)
                return done(err);

            // if the user is found, then log them in
            if (user) {
                return done(null, user); // user found, return that user
            } else {
                createNewUser(profile, token, done);
            }
        });
    });
}

passport.use(new FacebookStrategy(config.facebookConfig, authenticationSucceed));
