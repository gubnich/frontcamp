var express = require('express');
var app = express();
var news = require('./news.json')

app.all('*', function (req, res, next) {
    res.json(news)
  });

app.listen(3000, function () {
  console.log('Frontcamp app listening on port 3000!');
});