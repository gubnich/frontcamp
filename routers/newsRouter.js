const newsRouter = require('express').Router();
const requireAuth = require('../auth/local').requireAuth;
const DB_articles = require('../database/articles');

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}

newsRouter.get('/', ensureAuthenticated, function (req, res) {
  // throw new Error('Oops');
  DB_articles.find({})
    .then( data => res.json(data));
});

newsRouter.post('/', function (req, res) {
  const newArticle = new DB_articles(req.body);
  newArticle.save()
    .then( ({ _id }) => res.send(_id));
});

newsRouter.get('/:id', function (req, res) {
  const { id } = req.params;
  DB_articles.findOne({ _id: id })
    .then( data => res.json(data));
});

newsRouter.put('/:id', ensureAuthenticated, function (req, res) {
  const { id } = req.params;
  console.log(id, req.body)
  DB_articles.findOneAndUpdate({ _id: id }, req.body)
    .then( data => res.json(data));
});

newsRouter.delete('/:id', ensureAuthenticated,  function (req, res) {
  const { id } = req.params;
  DB_articles.findOneAndDelete({ _id: id })
    .then( data => res.json(data));
});

module.exports = newsRouter;
