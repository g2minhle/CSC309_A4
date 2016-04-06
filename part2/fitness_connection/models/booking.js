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
// separate schema for messages and this is accessed by admin to pass
//message from one user to another
var messages = mongoose.Schema({
    from: {
    	type: mongoose.Schema.ObjectId,
    	ref: 'Sender'
    },
    to:{
    	type: mongoose.Schema.ObjectId,
    	ref: 'Receiver'
    };
    message:{
    	type: mongoose.Schema.ObjectId,
    	ref: 'Message'
    }
    timeStamp: { type: Date, default: Date.now }	
});


module.exports = mongoose.model('Booking', booking);
module.exports = mongoose.model('Messages', messages);

