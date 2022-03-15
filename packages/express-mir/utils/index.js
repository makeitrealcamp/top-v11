const config = require('../config');

const { pagination } = config;

const paginationParseParams = ({
  page = pagination.page,
  limit = pagination.limit,
  skip = pagination.skip
}) => {
  return {
    page: parseInt(page, 10),
    limit: parseInt(limit, 10),
    skip: skip ? parseInt(skip, 10) : (page - 1) * limit,
  }
};

module.exports = {
  paginationParseParams
};