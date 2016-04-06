var
    User = require('../../models/user');

module.exports = {
    getUser: function(req, res, userId) {
        User.findOne(
            { '_id': userId },
            function(err, user) {
                // if there is an error, stop everything and return that
                // ie an error connecting to the database
                if (err) {
                    res.status(500).json({});
                } else if (user) {
                    // if the user is found, then log them in
                    user.authentication = null;   
                    res.status(200).json(user);
                } else {
                    res.status(404).json({});
                }
            }
        )
    },

    updateUser: function(req, res, userId) {
        console.log("Saving changes made by the user.");
        User.findOneAndUpdate(
            { '_id': userId },
            {
                "firstName": req.body.firstName,
                "lastName": req.body.lastName,
                "isTrainer": req.body.isTrainer,
                "sports": req.body.sports,
                "email": req.body.email,
                "phone": req.body.phone,
                "location": req.body.location,
                "experience": req.body.experience,
                "price": req.body.price,
                "education": req.body.education,
                "workexp": req.body.workexp
            },
            function(err, user) {
                if (err) res.status(500).json({});

                if (user) {
                    res.status(200).json(user);
                } else {
                    res.status(404).json({});
                }
            }
        );
    }
}