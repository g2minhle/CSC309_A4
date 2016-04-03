var mongoose = require('mongoose');

// define the schema for our user model
var booking = mongoose.Schema({
    trainer: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    trainee: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    dateCreated: { type: Date, default: Date.now }
});

/*
 * 
 */
module.exports = mongoose.model('Booking', booking);
