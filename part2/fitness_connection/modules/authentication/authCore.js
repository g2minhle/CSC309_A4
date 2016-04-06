var User = require('../../models/user');

module.exports = {
    requireLogIn: function(req, res, next) {
        // route middleware to make sure a user is logged in
        // if user is authenticated in the session, carry on 
        if (req.isAuthenticated()) {
            return next();
        } else {
            // if they aren't redirect them to the home page
            res.redirect('/');
        }
    },

    requireOwnership: function(req, res, next) {
        // route middleware to make sure a user is logged in
        // if user is authenticated in the session, carry on
        User.findById(req.session.passport.user, function(err, user) {
            if (req.params.id == user._id) {
                return next();
            } else {
                res.redirect('/index');
            }
        });

    }


}