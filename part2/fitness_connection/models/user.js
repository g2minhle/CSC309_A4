var bcrypt = require('bcrypt-nodejs'),
    mongoose = require('mongoose');

// define the schema for our user model
var userSchema = mongoose.Schema({
    id: mongoose.Schema.ObjectId,
    userid: Number,
    firstName: String,
    lastName: String,
    isTrainer: Boolean,
    email: String,
    phone: String,
    sports: String,
    experience: String,
    location: String,
    price: Number,
    rating: Number,
    education: String,
    workexp: String,
    comments: [
        {
            from: Number,
            name: String,
            comment: String,
            rating: Number,
        }
    ],
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
