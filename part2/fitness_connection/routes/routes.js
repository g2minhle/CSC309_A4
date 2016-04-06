var express = require('express'),
    path = require('path');

function loadRouters(app) {
    app.use('/', require('./index'));
    app.use('/users', require('./users'));
    app.use('/auth', require('./auth'));
    app.use('/search', require('./searchResults'));
    app.use('/index', require('./recommendations'));
    app.use('/admin', require('./admin'));
    app.use('/ratingReview', require('./ratingReview'));
}

function routersForErrorHandlers(app) {
    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    // error handlers

    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}

function routersForStatics(app) {
    app.use('/statics', require('less-middleware')(path.join(__dirname, '../views/statics')));
    app.use('/statics', express.static(path.join(__dirname, '../views/statics')));
    app.use('/build', express.static(path.join(__dirname, '../views/build')));
}

module.exports = {
    init: function(app) {
        loadRouters(app);
        routersForStatics(app);
        routersForErrorHandlers(app);
    }
};
