const { sign, verify } = require('jsonwebtoken');
const config = require('./config');
const { secret, expires } = config.token;
const logger = require('./config/logger');
const mongoose = require('mongoose');
const { Model } = require('./tasks/model');

const signToken = (payload, expiresIn = expires ) => {
  sign(payload, secret, { 
    algorithm: 'RS256',
    expiresIn
  });
}

// middleware auth
const auth = (req, res, next) => {
  let token = req.headers.authorization || '';
  if (token.startsWith('Bearer ')) {
    token = token.substring(7);
  }

  if (!token) {
    res.status(401).json({
      success: false,
      message: 'Unauthorized'
    });
  } else {
    verify(token, secret, (err, decoded) => {
      if (err) {
        res.status(401).json({
          success: false,
          message: 'Unauthorized'
        });
      }
      req.decoded = decoded;
      next();
    });
  }
}

// middleware me
const me = (req, res, next) => {
  const { _id } = req.decoded;
  const { id } = req.params;
  if (_id !== id) {
    res.status(403).json({
      success: false,
      message: 'Forbidden'
    });
  } else {
    next();
  }
}

// middleware owner 
const owner = async (req, res, next) => {
  const { _id } = req.decoded;
  const { id } = req.params;
  try {
    const doc = await Model.findById(id).populate('userId').exec();
    if (!doc) {
      const message = `${Model.modelName} not found`;
      next({
        message,
        statusCode: 404,
        level: 'warn'
      })
    } else {
      const userId = doc.userId.id;
      if ( _id !== userId) {
        res.status(403).json({
          success: false,
          message: 'Forbidden'
        });
      } else {
        next();
      }
    }
  } catch (err) {
    next(new Error(err));
  }
}

module.exports = {
  signToken,
  auth,
  me,
  owner,
};