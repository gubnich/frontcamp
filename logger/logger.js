const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: './logger/requests.log' })
  ]
});

const log = ({ url }, res, next) => {
  logger.log({
    level: 'info',
    [(new Date).toLocaleString()]: url
  });
  next();
};

module.exports = log;
