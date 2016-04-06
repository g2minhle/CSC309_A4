var
    express = require('express'),
    auth = require('../modules/authentication/authCore'),
    usersControllers = require('../modules/users/usersControllers');

var
    router = express.Router();

router.get('/pages/my/infoPage',
    auth.requireLogIn,
    function(req, res) {
        res.redirect('/users/pages/infoPage/' + req.session.passport.user);
    }
);

router.get('/pages/my/editPage',
    auth.requireLogIn,
    function(req, res) {
        res.redirect('/users/pages/editPage/' + req.session.passport.user);
    }
);

router.get('/pages/infoPage/:id',
    function(req, res) {
        res.render('pageWithUserId', {
            pageName: 'users',
            userId: req.params.id
        });
    }
);

router.get('/pages/editPage/:id',
    auth.requireLogIn,
    auth.requireOwnership,
    function(req, res, next) {
        res.render('pageWithUserId', {
            pageName: 'edit',
            userId: req.params.id
        });
    }
);

router.get('/:id',
    function(req, res) {
        usersControllers.getUser(req, res, req.params.id);
    }
);

router.post('/:id',
    auth.requireLogIn,
    auth.requireOwnership,
    function(req, res) {
        usersControllers.updateUser(req, res, req.params.id);
    }
);

module.exports = router;
