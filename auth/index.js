const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const DB_users = require('../database/users');

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

  const initializeAuth = (app) => {
  app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
  app.use(passport.initialize());
  app.use(passport.session());
}

const requireAuth = () => {
  return passport.authenticate('local', { failureRedirect: '/login' });
}

module.exports = { initializeAuth, requireAuth };