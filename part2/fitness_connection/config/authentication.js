module.exports = {
    sessionSecret: 'fitness_connection_6191035169',

    facebookConfig: {
        clientID: "603175176512414",
        clientSecret: "dc1d46f53f4ad7b7779e4e5703d75e12",
        callbackURL: "http://192.168.12.113:3000/auth/facebook/callback"
    },

    googleConfig: {
        returnURL: 'http://192.168.12.113:3000/auth/google/return',
        realm: 'http://www.example.com/'
    }
}

