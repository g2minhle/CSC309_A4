var bcrypt = require('bcrypt-nodejs'),
    mongoose = require('mongoose');

// define the schema for our user model
var localAuth = mongoose.Schema({
    id: mongoose.Schema.ObjectId,
    email: String,
    password: String
});

/*
 * 
 */
localAuth.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

/*
 * 
 */
localAuth.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

/*
 * 
 */
module.exports = mongoose.model('LocalAuth', localAuthSchema);