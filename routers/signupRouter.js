const signupRouter = require('express').Router();
const DB_users = require('../database/users');

signupRouter.get('/', function (req, res) {
  res.render('signup');
});

signupRouter.post('/', function (req, res) {
  const { username } = req.body;
  DB_users.findOne({ username }).then( user => {
    if (user) {
      res.send(`User "${username}" already exists`) 
    } else {
      const newUser = new DB_users(req.body);
      newUser.save()
        .then(insertedUser => res.send(insertedUser));
    }
  });
});

module.exports = signupRouter;
