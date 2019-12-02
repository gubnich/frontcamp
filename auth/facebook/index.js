const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy;
const DB_users = require('../../database/users');
const requireAuth = require('connect-ensure-login').ensureLoggedIn;

const FACEBOOK_CLIENT_ID = '2427549697512283';
const FACEBOOK_CLIENT_SECRET = '3bceba10e8d5b89db81267dc3e45bdbf';

passport.use(new FacebookStrategy({
  clientID: FACEBOOK_CLIENT_ID,
  clientSecret: FACEBOOK_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/facebook/callback"
},
function(accessToken, refreshToken, profile, cb) {
  // In this example, the user's Facebook profile is supplied as the user
  // record.  In a production-quality application, the Facebook profile should
  // be associated with a user record in the application's database, which
  // allows for account linking and authentication with other identity
  // providers.
  return cb(null, profile);
}));

// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function(obj, done) {
//   done(null, obj);
// });

const initializeAuth = (app) => {
  // app.use(require('express-session')({ secret: 'secret', resave: false, saveUninitialized: false }));
  // app.use(passport.initialize());
  // app.use(passport.session());
//   app.get('/',
//   passport.authenticate('facebook', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     // console.log(req.user)
//     res.redirect('/');
//   }
// );
app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log(req.user)
    res.redirect('/');
  }
);
}

const facebookLogin = () => passport.authenticate('facebook', { failureRedirect: '/login' });

module.exports = { initializeAuth, facebookLogin, requireAuth };