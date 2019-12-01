const mongoose = require("mongoose");
const loginRouter = require('express').Router();

const DB_users = require('../database/users');
const requireAuth = require('../auth').requireAuth;

loginRouter.get('/', function (req, res) {
  res.render('login');
});

loginRouter.post('/', 
  requireAuth(),
  function(req, res) {
    res.redirect('/');
  });

module.exports = loginRouter;
