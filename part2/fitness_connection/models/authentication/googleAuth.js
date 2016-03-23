var mongoose = require('mongoose');

// define the schema for our user model
var googleAuthSchema = mongoose.Schema({
    id: mongoose.Schema.ObjectId,
    facebookId: String,
    token: String,
    email: String,
});

/*
 * 
 */
module.exports = mongoose.model('GoogleAuth', googleAuthSchema);