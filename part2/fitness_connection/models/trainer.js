var bcrypt = require('bcrypt-nodejs'),
    mongoose = require('mongoose');

// define the schema for our user model
var trainerSchema = mongoose.Schema({
    id: mongoose.Schema.ObjectId,
    availability: [{
        from: Date,
        to: Date,
        location: [String],
        sport: [String]
    }],
    comments: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Comment'
        }
    ],
    bookings: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Booking'
        }
    ],
    dateCreated: { type: Date, default: Date.now }
});

/*
 * 
 */
module.exports = mongoose.model('Trainer', trainerSchema);