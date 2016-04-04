var bcrypt = require('bcrypt-nodejs'),
    mongoose = require('mongoose');

// define the schema for our user model
var userSchema = mongoose.Schema({
    id: mongoose.Schema.ObjectId,
    userid: Number,
    firstName: String,
    lastName: String,
    isTrainer: Boolean,
    profilePictureURL: String,
    email: String,
    phone: String,
    sports: String,
    experience: String,
    location: String,
    trainerProfile: {        
        type: mongoose.Schema.ObjectId,
        ref: 'Trainer'
    },
    authentication: {
        facebookAuth: {
            facebookId: String,
            token: String,
            email: String,
        },
        localAuth: {
            email: String,
            password: String
        }
    },
    dateCreated: { type: Date, default: Date.now }
});

/*
 * 
 */
userSchema.methods.generateHash = function(password) {    
};

/*
 * 
 */
userSchema.methods.validPassword = function(password) {    
};

/*
 * 
 */
module.exports = mongoose.model('User', userSchema);
