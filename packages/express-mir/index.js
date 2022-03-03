const express = require('express');
const cors = require('cors');
const lowdDB = require('lowdb');
const FyleSync = require('lowdb/adapters/FileSync');
const bcrypt = require('bcryptjs');
const joi = require('joi');
const { nanoid } = require('nanoid');

// Server Setup
const config = require('./config');
const { port } = config.server;

// Database Setup
const adapter = new FyleSync('db.json');
const db = lowdDB(adapter);
db.defaults({ users: [], students: [] }).write();

// Express Setup
const app = express();

// Global Middlewares
app.use(express.json());
app.use(cors({
  origin: '*'
}));

const saltRounds = 10;
const secret = 'mir-secret-key';

/** Endpoints (Routes) */ 

// Auth ... "Users"
const isAuthenticated = () => {}

// register POST: Create user
app.post('/api/register', (req, res) => {
  // get body from request
  const body = req.body;
  // validate body
  const userSchema = joi.object({
    name: joi.string().min(3).max(45).required(),
    surname: joi.string().min(5).max(45).required(),
    email: joi.string().email().required(),
    password: joi.string().required()
  });
  const { value, error } = userSchema.validate(body);
  if (error == null) {
    const salt = bcrypt.genSaltSync(saltRounds);
    const encrPassword = bcrypt.hashSync(body.password, salt);
    const user = {
      _id: nanoid(),
      ...value,
      password: encrPassword,
      createdAt: Date.now()
    };
    db.get('users').push(user).write();
    res.status(200).json({ success: true, message: 'User has been created', data: user });
  } else {
    res.status(400).json({ success: false, message: 'Validation error', data: value, error: error.details });
  }
});

// login POST
app.post('/api/login', (req, res) => {
  const body = req.body;
  // get body from request
  const { value, error } = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required() // encr
  }).validate(body);
  if (error == null) {
    const user = db.get('users').find({ email: body.email }).value(); // query
    if (user) {
      // validate password
      const isValidPassword = bcrypt.compareSync(body.password, user.password);
      if (isValidPassword) {
        res.status(200).json({ success: true, data: {
          id: user._id,
          name: user.name, 
          surname: user.surname, 
          email: user.email, 
          token: secret
        }});
      } else {
        res.status(403).json({ success: false, message: 'Wrong password'});
      }
    } else {
      res.status(403).json({ success: false, message: 'Email not registered'});
    }
  } else {
    // validation error
    res.status(400).json({ success: false, message: 'Validation error', data: value, error: error.details });
  }
});

// logout

// Resource: Students
// GET: fetch students
app.get('/api/students', (req, res) => {
  const students = db.get('students').value(); // query
  res.status(200).json({ success: true, data: students })
});

// GET: fetch an student by id
app.get('/api/students/:id', (req, res) => {
  const { id } = req.params;
  const student = db.get('students').find({ _id: id }).value(); // query
  res.status(200).json({ success: true, data: student })
});

// POST: create new student
app.post('/api/students', (req, res) => {
  // get body from request
  const body = req.body;
  // validate body
  const studentSchema = joi.object({
    name: joi.string().min(3).max(45).required(),
    surname: joi.string().min(5).max(45).required(),
    email: joi.string().email().required(),
    description: joi.string().min(20).max(300).required(),
    headline: joi.string(),
    photo: joi.string().required(),
    avatar: joi.string(),
    phone: joi.string().min(9).max(10).pattern(/^[0-9]+$/),
    age: joi.number(),
    skills: joi.object({
      programming: joi.number(),
      javascript: joi.number(),
      css: joi.number(),
      html: joi.number(),
      git: joi.number()
    }),
    social: joi.array(),
    metadata: joi.object({
      starship: joi.string()
    })
  });
  const result = studentSchema.validate(body);
  const { value, error } = result;
  // if there is no error, body is considered valid
  if (error == null) {
    // validation success
    const student = {
      _id: nanoid(),
      ...value,
      createdAt: Date.now()
    };
    // insert into database // mutation - write
    db.get('students').push(student).write();
    res.status(200).json({ success: true, message: 'Student has been created', data: student })
  } else {
    // validation error
    res.status(400).json({ success: false, message: 'Validation error', data: value, error: error.details })
  }
});

// PATCH: update a student
app.patch('/api/students/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  // validate body
  const studentSchema = joi.object({
    name: joi.string().min(3).max(45),
    surname: joi.string().min(5).max(45),
    phone: joi.string().length(9).pattern(/^[0-9]+$/),
    age: joi.number()
  });
  const result = studentSchema.validate(body);
  const { value, error } = result;
  if (error == null) {
    // validation success
    const student =  db.get('students').find({ _id: id }).value(); // query
    if (!student) {
      res.status(404).json({ success: true, message: 'Student not found' });
    } else {
      const update = {
        ...student,
        ...body,
        updatedAt: Date.now()
      };
      // update into database // mutation - write
      db.get('students').find({ _id: id }).assign(update).write();
      res.status(200).json({ success: true, message: 'Student has been updated', data: update });
    }
  } else {
    // validation error
    res.status(400).json({ success: false, message: 'Validation error', data: value, error: error.details })
  }
});

// DELETE:
app.delete('/api/students/:id', (req, res) => {
  const { id } = req.params;
  const student =  db.get('students').find({ _id: id }).value(); // query
    if (!student) {
      res.status(404).json({ success: true, message: 'Student not found' });
    } else {
      // delete into database // mutation - write
      db.get('students').remove({ _id: id }).write();
      res.status(200).json({ success: true, message: 'Student has been deleted' });
    }
});

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});