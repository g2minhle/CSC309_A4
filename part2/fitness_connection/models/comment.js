var mongoose = require('mongoose');

// define the schema for our user model
var commentSchema = mongoose.Schema({
    id: mongoose.Schema.ObjectId,
    from: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    comment: String,
    rating: Number,
    dateCreated: { type: Date, default: Date.now }
});

/*
 * 
 */
module.exports = mongoose.model('Comment', commentSchema);
