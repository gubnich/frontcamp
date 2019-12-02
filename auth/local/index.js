const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const DB_users = require('../../database/users');
const requireAuth = require('connect-ensure-login').ensureLoggedIn;

passport.use(new LocalStrategy(
  function (username, password, cb) {
    DB_users.findOne({ username: username }, function (err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if (user.password != password) { return cb(null, false); }
      return cb(null, user);
    });
  }
));

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

// passport.deserializeUser(function (_id, cb) {
//   DB_users.findOne({ _id: _id }, function (err, user) {
//     if (err) { return cb(err); }
//     cb(null, user);
//   });
// });

passport.deserializeUser(function (obj, cb) {
  
    cb(null, obj);
});

const initializeAuth = (app) => {
  app.use(require('express-session')({ secret: 'secret', resave: false, saveUninitialized: false }));
  app.use(passport.initialize());
  app.use(passport.session());
}

const login = () => passport.authenticate('local', { failureRedirect: '/login' });

module.exports = { initializeAuth, login, requireAuth };