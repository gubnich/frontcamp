var express = require('express');
var app = express();
var news = require('./news.json')

app.set('view engine', 'pug');

app.use(express.json());

// app.all('*', function (req, res, next) {
//   res.json(news);
// });

app.get('/news', function (req, res) {
  // throw new Error('woops');
  res.jso(news.articles);
});

app.get('/news/:id', function (req, res) {
  const { id } = req.params;
  const data = news.articles[id];
  res.json(data);
});

/*
{
  "id": "9",
  "author": null,
  "title": "Nine people killed as storms leave 'trail of biblical destruction' in France, Greece and Italy",
  "description": "Nine people die after deadly storms and historic levels of rain drenched parts of Greece, Italy and France leading to major floods, landslides and severe road destructions.",
  "url": "http://www.abc.net.au/news/2019-11-26/nine-people-killed-as-deadly-rainstorms-hit-parts-of-europe/11740482",
  "urlToImage": "https://www.abc.net.au/news/image/11740658-16x9-700x394.jpg",
  "publishedAt": "2019-11-26T09:40:05Z"
}
*/
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

app.use(function(error, req, res, next) {
  // Any request to this server will get here, and will send an HTTP
  // response with the error message 'woops'
  // res.json({ message: error.message + 'hello'});
  res.render('error', { message: error.message});
});

app.listen(3000, function () {
  console.log('Frontcamp app listening on port 3000!');
});