const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const DB_users = require('../../database/users');

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

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

const login = () => passport.authenticate('local', { failureRedirect: '/login' });

module.exports = login;
