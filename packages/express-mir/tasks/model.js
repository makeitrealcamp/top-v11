const mongoose = require('mongoose');
const { Schema } = mongoose;

const fields = {
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
    trim: true,
    maxLength: 255,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now()
  }
};

const taskSchema = Schema(fields, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
