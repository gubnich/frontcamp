const express = require('express');
// const newsRouter = require('./routers/newsRouter');
// const sourceRouter = require('./routers/sourceRouter');

const app = express();
const localNews = [];

app.use(express.json());

// app.use('/news', newsRouter);
// app.use('/source', sourceRouter);

// app.all('*', function (req, res, next) {
//   res.json(localNews);
// });

app.get('/:id', function (req, res) {
  const { id } = req.params;
  const data = localNews[id];
  res.json(data);
});

app.get('/local/all', function (req, res, next) {
  console.log('get', localNews)

  res.json(localNews);
});

app.get('/local/article/:id', function (req, res, next) {
  const { id } = req.params;
  console.log('get', localNews)

  res.json(localNews[id]);
});

app.put('/local/add', function (req, res, next) {
  localNews.push({...req.body, id: localNews.length});
  console.log('put', req.body)

  res.json(localNews);
});

// app.put('*', function (req, res) {
//   // const { id } = req.params;
//   console.log('put')
//   localNews.splice(id, 1, req.body);
//   res.json(localNews);
// });

app.delete('/:id', function (req, res) {
  const { id } = req.params;
  localNews.splice(id, 1);
  res.json(localNews);
});

app.use(function (error, req, res, next) {
  res.render('error', { message: error.message });
});

app.listen(3000, function () {
  console.log('Frontcamp app listening on port 3000!');
});
