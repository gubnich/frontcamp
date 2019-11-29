const newsRouter = require('express').Router();
const news = require('../data/news.json');

newsRouter.get('/', function (req, res) {
  throw new Error('Oops');
  res.json(news.articles);
});

newsRouter.post('/', function (req, res) {
  news.articles.push(req.body);
  res.json(news.articles);
});

newsRouter.get('/:id', function (req, res) {
  const { id } = req.params;
  const data = news.articles[id];
  res.json(data);
});

newsRouter.put('/:id', function (req, res) {
  const { id } = req.params;
  news.articles.splice(id, 1, req.body);
  res.json(news.articles);
});

newsRouter.delete('/:id', function (req, res) {
  const { id } = req.params;
  news.articles.splice(id, 1);
  res.json(news.articles);
});

module.exports = newsRouter;
