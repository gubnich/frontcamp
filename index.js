const express = require('express');
const newsRouter = require('./routers/newsRouter');
const sourceRouter = require('./routers/sourceRouter');

const app = express();
const news = require('./data/news.json');
const log = require('./logger/logger');

app.set('view engine', 'pug');

app.use(express.json());
app.use(log);

app.use('/news', newsRouter);
app.use('/source', sourceRouter);

app.all('*', function (req, res, next) {
  res.json(news);
});

app.use(function (error, req, res, next) {
  res.render('error', { message: error.message });
});

app.listen(3000, function () {
  console.log('Frontcamp app listening on port 3000!');
});