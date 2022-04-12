const mongoose = require('mongoose');
const { Schema } = mongoose;

const fields = {
  title: {
    type: String,
    required: true,
    maxLength: 128,
    trim: true,
  },
  description: {
    type: String,
    default: '',
    trim: true,
    maxLength: 255,
  },
  members: {
    type: Number,
    default: 1
  }
};

const references = {
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
};

const groupSchema = Schema(Object.assign(fields, references), { timestamps: true });

module.exports = {
  Model: mongoose.model('Group', groupSchema),
  fields,
  references
};