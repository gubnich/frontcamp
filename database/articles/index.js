const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  author: mongoose.Schema.Types.String,
  title: mongoose.Schema.Types.String,
  description: mongoose.Schema.Types.String,
  url: mongoose.Schema.Types.String,
  urlToImage: mongoose.Schema.Types.String,
  publishedAt: mongoose.Schema.Types.String,
});

const DB_articles = mongoose.model('articles', articleSchema);

module.exports = DB_articles;