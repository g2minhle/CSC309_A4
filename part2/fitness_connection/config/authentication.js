module.exports = {
    sessionSecret: 'fitness_connection_6191035169',

    facebookConfig: {
        clientID: "603175176512414",
        clientSecret: "dc1d46f53f4ad7b7779e4e5703d75e12",
        callbackURL: "http://localhost:3000/auth/facebook/callback"
    },

    localConfig: {
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    }
}

