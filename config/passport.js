// load all the things we need
var LocalStrategy = require('passport-local').Strategy;
var userService = require('../app/user.js');

// var User = require('../app/models/user');
// var configAuth = require('./auth'); // use this one for testing

module.exports = function (passport) {

    passport.serializeUser(function (user, done) {
        done(null, user._id);
    });

    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        var user = userService.getUser(id);
        done(null, user);
    });
    //login 
    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    },
        function (req, email, password, done) {
            if (email)
                email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching

            var user = userService.getUser(email);
            done(null, user);
        }));

    //sing up
    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    },
        function (req, email, password, done) {
            if (email)
                email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching
            // asynchronous
            process.nextTick(function () {
                if (!req.user) {
                    var user = userService.getUser(email);
                    done(null, user);
                } else if (!req.user.local.email) {
                } else {
                    return done(null, req.user);
                }

            });

        }));


};
