var bcrypt = require('bcrypt-nodejs'),
    mongoose = require('mongoose');

// define the schema for our user model
var userSchema = mongoose.Schema({
    id: mongoose.Schema.ObjectId,
    firstName: String,
    lastName: String,
    isTrainer: Boolean,
    profilePictureURL: String,
    email: String,
    phone: String,
    sportRecord: {
        sports: [String],
        locaion: [String],
        experience: String,
    },
    trainerProfile: {        
        type: mongoose.Schema.ObjectId,
        ref: 'Trainer'
    },
    authentication: {
        facebookAuth: {
            type: mongoose.Schema.ObjectId,
            ref: 'FacebookAuth'
        },
        googleAuth: {
            type: mongoose.Schema.ObjectId,
            ref: 'GoogleAuth'
        },
        localAuth: {
            type: mongoose.Schema.ObjectId,
            ref: 'LocalAuth'
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