const { Model, fields } = require('./model');
const logger = require('../config/logger');
const { paginationParseParams, sortParseParams, sortingStr } = require('../utils');

// fetch all documents from collection
exports.fetch = async (req, res, next) => {
  const { page, limit, skip } = paginationParseParams(req.query);
  const { sortBy, direction } = sortParseParams(req.query, fields);

  const all = Model.find({})
    .sort(sortingStr(sortBy, direction))
    .skip(skip)
    .limit(limit);

  const count = Model.countDocuments();
  try {
    const [docs, total] = await Promise.all([all.exec(), count.exec()]);
    const pages = Math.ceil(total/limit);
    res.status(200).json({ 
      success: true, 
      data: docs,
      meta: {
        page,
        limit, 
        skip,
        total,
        pages,
      }
    });
  } catch (err) {
    next(new Error(err))
  }
};

exports.read = async (req, res, next) => {
  const { id = null } = req.params;
  try {
    const doc = await Model.findById(id).exec();
    if (!doc) {
      const message = `${Model.modelName} not found`;
      next({
        message,
        statusCode: 404,
        level: 'warn'
      })
    } else {
      res.status(200).json({ success: true, data: doc })
    }
  } catch (err) {
    next(new Error(err));
  }
};

exports.create = async (req, res, next) => {
  const body = req.body;
  const document = new Model(body);
  try {
    const doc = await document.save();
    logger.info('Document saved:', doc);
    res.status(201); // CREATED
    res.json({ 
      success: true, 
      message: `${Model.modelName} has been created`, 
      data: doc
    });
  } catch (err) {
    next(new Error(err));
  }
};

exports.update = async (req, res, next) => {
  const { id } = req.params;
  const body = req.body;
  logger.info(`id: ${id}, ${body}`);
  try {
    const updated = await Model.findByIdAndUpdate(id, {
      $set: body
    }, { });
    res.status(200).json({ 
      success: true, 
      message: `${Model.modelName} has been updated`,
      data: updated
    });
  } catch (err) {
    next(new Error(err));
  }
};

exports.delete = async (req, res, next) => {
  const { id = null } = req.params;
  try {
    const removed = await Model.deleteOne({ _id: id });
    res.status(200).json({ 
      success: true,
      message: `${Model.modelName} has been deleted`,
      data: removed
    });
  } catch (err) {
    next(new Error(err));
  }
};