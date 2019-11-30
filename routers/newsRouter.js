const mongoose = require("mongoose");
const newsRouter = require('express').Router();
const articleSchema = require('../articleSchema');

mongoose.connect("mongodb+srv://developer:develop@cluster0-zukgb.mongodb.net/news?retryWrites=true&w=majority", { useNewUrlParser: true });
const DBarticles = mongoose.model("articles", articleSchema);

newsRouter.get('/', function (req, res) {
  // throw new Error('Oops');
  DBarticles.find({})
    .then( data => res.json(data));
});

newsRouter.post('/', function (req, res) {
  const newArticle = new DBarticles(req.body);
  newArticle.save()
    .then( ({ _id }) => res.send(_id));
});

newsRouter.get('/:id', function (req, res) {
  const { id } = req.params;
  DBarticles.findOne({ _id: id })
    .then( data => res.json(data));
});

newsRouter.put('/:id', function (req, res) {
  const { id } = req.params;
  DBarticles.findOneAndUpdate({ _id: id }, req.body)
    .then( data => res.json(data));
});

newsRouter.delete('/:id', function (req, res) {
  const { id } = req.params;
  DBarticles.findOneAndDelete({ _id: id })
    .then( data => res.json(data));
});

module.exports = newsRouter;
