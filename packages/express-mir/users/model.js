const mongoose = require('mongoose');
const { Schema } = mongoose;

const fields = {
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
  }
};

const references = {};

const userSchema = Schema(Object.assign(fields, references), { timestamps: true });

module.exports = {
  Model: mongoose.model('User', userSchema),
  fields,
  references
};