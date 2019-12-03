const express = require('express');
const bodyParser = require('body-parser');

const newsRouter = require('./routers/newsRouter');
const signupRouter = require('./routers/signupRouter');
const loginRouter = require('./routers/loginRouter');
const log = require('./logger/logger');
const initializeAuth = require('./auth').initializeAuth;
require('./database')

const app = express();

app.set('view engine', 'pug');
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(log);

initializeAuth(app);

app.use('/news', newsRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);

app.get('/',function (req, res, next) {
  res.render('main');
});

app.use(function (error, req, res, next) {
  res.render('error', { message: error.message });
});

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.listen(3000, function () {
  console.log('Frontcamp app listening on port 3000!');
});