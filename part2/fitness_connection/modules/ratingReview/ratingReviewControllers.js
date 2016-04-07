var
    User = require('../../models/user');

module.exports = {
    getReviews: function(req, res, userId) {
        User.findOne(
            { '_id': userId },
            function(err, user) {
                // if there is an error, stop everything and return that
                // ie an error connecting to the database
                if (err) {
                    res.status(500).json({});
                } else if (user) {
                    // if the user is found, then log them in
                    res.status(200).json(user.comments);
                } else {
                    res.status(404).json({});
                }
            }
        )
    },

    addReview: function(req, res, fromUserId) {
        console.log("Saving changes made by the user.");
        User.findOneAndUpdate(
            { '_id': req.body.userId },
            { 
                "$push":{
                    "comments": {
                        from: fromUserId,
                        comment: req.body.comment,
                        rating: req.body.rating,
                    }
                }
            },
            function(err, user) {
                if (err) {
                    res.status(500)
                } else if (user) {
                    res.status(200);
                } else {
                    res.status(404);
                }
            }
        );
    }
}