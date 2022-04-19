const mongoose = require('mongoose');
const { Schema } = mongoose;
const { hash, compare } = require('bcryptjs');

const fields = {
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    trim: true,
  },
  role: {
    type: String,
    default: 'basic',
    enum: ['basic', 'supervisor', 'admin']
  }
};

const userSchema = Schema(fields, { 
  timestamps: true,
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true,
  }
});

userSchema.pre('save', async function save(next) {
  if (this.isNew || this.isModified('password')) {
    this.password = await hash(this.password, 10);
  }
  next();
});

userSchema.virtual('name')
  .get(function getName() {
    return `${this.firstname} ${this.lastname}`;
  })
  .set(function setName() {
    const { firstname = '', lastname = '' } = name.split(' ');
    this.firstname = firstname;
    this.lastname = lastname;
  });

const hiddenFields = ['password'];

userSchema.methods.toJSON = function toJSON() {
  const doc = this.toObject();
  hiddenFields.forEach((field) => {
    if (Object.hasOwnProperty.call(doc, field)) {
      delete doc[field];
    }
  });
  return doc;
}

userSchema.methods.verifyPassword = function verifyPassword(password) {
  console.log(password);
  return compare(password, this.password);
}

module.exports = {
  Model: mongoose.model('User', userSchema),
  fields
};