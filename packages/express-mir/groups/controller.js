const { Model, fields, references } = require('./model');
const logger = require('../config/logger');
const { paginationParseParams, sortParseParams, sortingStr } = require('../utils');
const referencesNames = Object.getOwnPropertyNames(references);
const { roles } = require('../roles');

// fetch all documents from collection
exports.fetch = async (req, res, next) => {
  const { page, limit, skip } = paginationParseParams(req.query);
  const { sortBy, direction } = sortParseParams(req.query, fields);
  const populate = referencesNames.join(' ');

  const all = Model.find({})
    .populate(populate)
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

exports.create = async (req, res, next) => {
  const body = req.body;
  const { _id, role }  = req.decoded;
  const resource = Model.modelName.toLowerCase();
  const permission = roles.can(role).createOwn(resource);
  body.userId = _id;
  const document = new Model(body);

  if (permission.granted) {
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
  } else { 
    res.status(401).json({
      success: false,
      message: 'Unauthorized: you do not have enough permissions'
    });
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
