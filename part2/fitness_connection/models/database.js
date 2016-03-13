var database = require('mongoose'),
    config = require('../config/database');

module.exports = {
    init: function() {
        database.connect(config.url);
    }
};