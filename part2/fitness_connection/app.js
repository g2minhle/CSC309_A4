var bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    express = require('express'),
    favicon = require('serve-favicon'),
    logger = require('morgan');

var app = express(),
    modules = [
        'authentication',
        'templateEngine'
    ];

// uncomment after placing your favicon in /public
// TODO: Add favicon.ico
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger('dev'));


require('./models/database').init();

for (var index in modules) {
    var urlToModules = './modules/' + modules[index] + "/init";
    require(urlToModules).init(app);
}

require('./routes/routes').init(app);

module.exports = app;