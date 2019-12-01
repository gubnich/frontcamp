const signupRouter = require('express').Router();

signupRouter.get('/', function (req, res) {
  res.send('Trying second router');
});

module.exports = signupRouter;
