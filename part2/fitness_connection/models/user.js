var bcrypt = require('bcrypt-nodejs'),
    mongoose = require('mongoose');

// define the schema for our user model
var userSchema = mongoose.Schema({
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
            from: String,
            comment: String,
            rating: Number,
        }
    ],
    authentication: {
        facebookAuth: {
            id: String,
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
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

/*
 * 
 */
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.authentication.localAuth.password);
};

/*
 * 
 */
module.exports = mongoose.model('User', userSchema);
