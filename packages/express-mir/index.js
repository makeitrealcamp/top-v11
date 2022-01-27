const express = require('express');
const lowdDB = require('lowdb');
const FyleSync = require('lowdb/adapters/FileSync');

// Server Setup
const PORT = 3000;

// Database Setup
const adapter = new FyleSync('db.json');
const db = lowdDB(adapter);
db.defaults({ students: [] }).write();

// Express Setup
const app = express();

/** Endpoints */ 
// Resource: Students
// GET: fetch students
app.get('/api/students', (req, res) => {
  const students = db.get('students').value(); // query
  res.status(200).json({ success: true, data: students })
});

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});