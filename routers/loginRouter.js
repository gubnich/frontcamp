const loginRouter = require('express').Router();

const login = require('../auth/local');
const facebookLogin = require('../auth/facebook');

loginRouter.get('/', function (req, res) {
  res.render('login');
});

loginRouter.get('/facebook',
  facebookLogin()
);

loginRouter.get('/facebook/callback',
  facebookLogin(),
  function (req, res) {
    res.redirect('/');
  }
);

loginRouter.post('/',
  login(),
  function (req, res) {
    res.redirect('/');
  }
);

module.exports = loginRouter;
