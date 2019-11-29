const sourceRouter = require('express').Router();

sourceRouter.get('/', function (req, res) {
  res.send('Trying second router');
});

sourceRouter.get('/test', function (req, res) {
  res.send('Perfetto');
});

module.exports = sourceRouter;
