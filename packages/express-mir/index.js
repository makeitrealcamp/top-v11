const express = require('express');
const lowdDB = require('lowdb');
const FyleSync = require('lowdb/adapters/FileSync');
const joi = require('joi');
const { nanoid } = require('nanoid');

// Server Setup
const PORT = 3000;

// Database Setup
const adapter = new FyleSync('db.json');
const db = lowdDB(adapter);
db.defaults({ students: [] }).write();

// Express Setup
const app = express();

// Global Middlewares
app.use(express.json());

/** Endpoints (Routes) */ 
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
    phone: joi.string().length(9).pattern(/^[0-9]+$/).required(),
    email: joi.string().email().required(),
    age: joi.number()
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

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});