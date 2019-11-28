const express = require('express');
// const winston = require('winston');
const news = require('./news.json')

const app = express();

app.set('view engine', 'pug');

app.use(express.json());

app.all('*', function (req, res, next) {
  throw new Error('woops');
  res.jso(news);
});

// const logger = winston.createLogger({
//   transports: [
//     new winston.transports.File({ filename: 'requests.log' })
//   ]
// });

// app.all('*', function ({ url }, res, next) {
//   logger.log({
//     level: 'info',
//     [(new Date).toLocaleString()]: url
//   });
//   next();
// });

app.get('/news', function (req, res) {
  res.json(news.articles);
});

app.get('/news/:id', function (req, res) {
  const { id } = req.params;
  const data = news.articles[id];
  res.json(data);
});

app.post('/news', function (req, res) {
  news.articles.push(req.body);
  res.json(news.articles);
});

app.put('/news/:id', function (req, res) {
  const { id } = req.params;
  news.articles.splice(id, 1, req.body)
  res.json(news.articles);
});

app.delete('/news/:id', function (req, res) {
  const { id } = req.params;
  news.articles.splice(id, 1)
  res.json(news.articles);
});

app.use(function (error, req, res) {
  res.render('error', { message: error.message });
});


app.listen(3000, function () {
  console.log('Frontcamp app listening on port 3000!');
});