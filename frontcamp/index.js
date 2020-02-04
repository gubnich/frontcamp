const express = require('express');

const app = express();
const localNews = [];

app.use(express.json());

app.get('/local/all', function (req, res, next) {
  res.json(localNews);
});

app.get('/local/article/:id', function (req, res, next) {
  const { id } = req.params;
  const data = localNews.find(item => item.id == id);
  res.json(data);
});

app.post('/local/article/:id', function (req, res, next) {
  const { id } = req.params;
  const dataIndex = localNews.findIndex(item => item.id == id);
  localNews[dataIndex] = {...localNews[dataIndex], ...req.body};
  res.json(localNews[dataIndex]);
});

app.put('/local/add', function (req, res, next) {
  localNews.push({...req.body, id: Date.now()});
  res.json(localNews);
});

app.delete('/local/article/:id', function (req, res) {
  const { id } = req.params;
  const dataIndex = localNews.findIndex(item => item.id == id);
  localNews.splice(dataIndex, 1);
  res.json(localNews.length);
});

app.use(function (error, req, res, next) {
  res.render('error', { message: error.message });
});

app.listen(3000, function () {
  console.log('Frontcamp app listening on port 3000!');
});
