const passport = require('passport')

const initializeAuth = (app) => {
  app.use(require('express-session')({ secret: 'secret', resave: false, saveUninitialized: false }));
  app.use(passport.initialize());
  app.use(passport.session());
}

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}

module.exports = { initializeAuth, ensureAuthenticated };
