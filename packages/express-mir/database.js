const mongoose = require('mongoose');
const logger = require('./config/logger');

exports.connect = (
  { protocol = 'mongodb', url, username = '', password = '' },
  options = {}
) => {
  let dbUrl = '';

  if (username && password) {
    dbUrl = `${protocol}://${username}:${password}@${url}`;
  } else {
    dbUrl = `${protocol}://${url}`;
  }

  mongoose.connect(dbUrl, options);

  mongoose.connection.on('open', () => {
    logger.info('MongoDB connected');
  });
  
  mongoose.connection.on('close', () => {
    logger.info('MongoDB disconnected: mongoose default connection closed');
  });
  
  mongoose.connection.on('error', (err) => {
    logger.info('MongoDB connection error:', err);
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      logger.info('MongoDB disconnected: app termination');
      process.exit(0);
    });
  });
}

exports.disconnect = () => {
  mongoose.connection.close(() => {
    logger.info('MongoDB disconnected');
  });
}