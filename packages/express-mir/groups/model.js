const mongoose = require('mongoose');
const { Schema } = mongoose;

const fields = {
  title: {
    type: String,
    required: true,
    maxLength: 128,
    trim: true,
  }
};

const references = {};

const groupSchema = Schema(Object.assign(fields, references), { timestamps: true });

module.exports = {
  Model: mongoose.model('Group', groupSchema),
  fields,
  references
};