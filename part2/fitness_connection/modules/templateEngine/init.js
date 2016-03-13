var path = require('path'),
    config = require('../../config/templateEngine');

module.exports = {
    init: function(app) {
        app.set('views', path.join(__dirname, "../../" + config.urlToTemplates));
        app.set('view engine', 'ejs');
    }
};