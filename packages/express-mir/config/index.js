require('dotenv').config();

const config = {
  server: {
    port: process.env.SERVER_PORT,
  },
  database: {
    protocol: process.env.DATABASE_PROTOCOL,
    url: process.env.DATABASE_URL
  },
  pagination: {
    limit: 10,
    skip: 0,
    page: 1
  },
  sort: {
    sortBy: {
      default: 'createdAt',
      fields: ['createdAt', 'updatedAt'],
    },
    direction: {
      default: 'desc',
      options: ['asc', 'desc'],
    }
  }
};

module.exports = config;
