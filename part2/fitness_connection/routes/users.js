var
    express = require('express'),
    assert = require('assert');

var
    router = express.Router(),
    auth = require('../modules/authentication/authCore'),
    User = require('../models/user');

/* GET users listing. */
router.get('/myAccount', function(req, res) {
    res.redirect('/users/editPage/' + req.session.passport.user);
});


/* GET users listing. */
router.get('/infoPage/:id', function(req, res) {
    res.render('page', { pageName: 'users' });
});

/* GET users edit page */
router.get('/editPage/:id',
    auth.requireLogIn,
    auth.requireOwnership,
    function(req, res, next) {
        res.render('page', { pageName: 'edit' });
    }
);

router.get('/:id', function(req, res) {
    User.findOne({ '_id': req.params.id },
        function(err, user) {
            // if there is an error, stop everything and return that
            // ie an error connecting to the database
            if (err) res.status(500).json({});

            // if the user is found, then log them in
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({});
            }
        });
});

/* GET save changes on edit page. */
router.post('/:id',
    auth.requireLogIn,
    auth.requireOwnership,
    function(req, res) {
        console.log("Saving changes made by the user.");
        User.findOneAndUpdate({ '_id': req.params.id },
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
    });

module.exports = router;
