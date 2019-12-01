const express = require('express');
const newsRouter = require('./routers/newsRouter');
const signupRouter = require('./routers/signupRouter');
const mongoose = require("mongoose");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const app = express();
const log = require('./logger/logger');

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

  mongoose.connect("mongodb+srv://developer:develop@cluster0-zukgb.mongodb.net/news?retryWrites=true&w=majority", { useNewUrlParser: true });

  const userSchema = mongoose.Schema({
    username: mongoose.Schema.Types.String,
    password: mongoose.Schema.Types.String,
  });
  const DB_users = mongoose.model('users', userSchema);

  passport.use(new LocalStrategy(
    function(username, password, cb) {
      DB_users.findOne({ username: username }, function(err, user) {
        if (err) { return cb(err); }
        if (!user) { return cb(null, false); }
        if (user.password != password) { return cb(null, false); }
        return cb(null, user);
      });
    }));

    passport.serializeUser(function(user, cb) {
      console.log('ffffffffffffffff', user)
      cb(null, user._id);
    });

    passport.deserializeUser(function(_id, cb) {
      console.log('ffffffffffffffff', _id)

      DB_users.findOne({ _id: _id }, function (err, user) {
        if (err) { return cb(err); }
        cb(null, user);
      });
    });

app.set('view engine', 'pug');
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true})); // use for forms
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(log);

app.use(passport.initialize());
app.use(passport.session());
app.use('/news', require('connect-ensure-login').ensureLoggedIn(), newsRouter);
app.use('/signup', signupRouter);


app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/login',function (req, res, next) {
  res.render('login');
});

app.get('/',function (req, res, next) {
  res.render('main');
});

app.use(function (error, req, res, next) {
  res.render('error', { message: error.message });
});

app.listen(3000, function () {
  console.log('Frontcamp app listening on port 3000!');
});