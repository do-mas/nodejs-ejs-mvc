var userService = require('./user.js');
module.exports = function (app, passport) {

    app.get('/', function (req, res) {
        res.render('main.ejs');
    });

    app.get('/profile', authorise, function (req, res) {
        res.render('profile.ejs', {
            user: req.user
        });
    });

    app.get('/message/sent', authorise, function (req, res) {
        res.render('message-sent.ejs', {
            user: req.user
        });
    });

    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

    app.get('/login', function (req, res) {
        res.render('login2.ejs', { message: req.flash('loginMessage') });
    });

    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/message/sent', 
        failureRedirect: '/login', 
        failureFlash: true // allow flash messages
    }));

    app.get('/signup', function (req, res) {
        res.render('singup2.ejs', { message: req.flash('signupMessage') });
    });

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/message/sent', 
        failureRedirect: '/signup', 
        failureFlash: true // allow flash messages
    }));

};

// route middleware to ensure user is logged in
function authorise(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}
