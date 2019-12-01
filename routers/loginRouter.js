const mongoose = require("mongoose");
const loginRouter = require('express').Router();

const DB_users = require('../database/users');
const login = require('../auth').login;

loginRouter.get('/', function (req, res) {
  res.render('login');
});

loginRouter.post('/', 
  login(),
  function(req, res) {
    res.redirect('/');
  });

module.exports = loginRouter;
