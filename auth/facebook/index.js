const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy;

const FACEBOOK_CLIENT_ID = '2427549697512283';
const FACEBOOK_CLIENT_SECRET = '3bceba10e8d5b89db81267dc3e45bdbf';

passport.use(new FacebookStrategy({
  clientID: FACEBOOK_CLIENT_ID,
  clientSecret: FACEBOOK_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/login/facebook/callback"
},
  function (accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }
));

const facebookLogin = () => passport.authenticate('facebook', { failureRedirect: '/login' });

module.exports = facebookLogin;