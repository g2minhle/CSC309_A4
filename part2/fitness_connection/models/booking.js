var mongoose = require('mongoose');

// define the schema for our user model
var booking = mongoose.Schema({
    trainerId: String,
    traineeId: String,
    time: String,
    dateCreated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', booking);

