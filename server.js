// server.js
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var passport = require('passport');
var flash = require('connect-flash');
var path = require('path');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({
    secret: 'mytopsecret', // session secret
    resave: true,
    saveUninitialized: true
}));

// app.use(function (req, res, next) {
//     if (req.path.indexOf('profile') > -1) {
//         console.log('has profile');
//         if (req.isAuthenticated()){
//             console.log('is authenticated');
//             next();
//         }
//         console.log('redirecting');
//         // res.redirect('/');
//         }
//         console.log('going next');
//     next();

// });
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

require('./app/routes.js')(app, passport);


var userService = require('./app/user.js');
// console.log(userService);
userService.getUser(12);

app.listen(port);
console.log('Application running on port ' + port);
