const express = require('express');
const lowdDB = require('lowdb');
const FyleSync = require('lowdb/adapters/FileSync');

// Server Setup
const PORT = 3000;

// Database Setup
const adapter = new FyleSync('db.json');
const db = lowdDB(adapter);
db.defaults({ }).write();

// Express Setup
const app = express();

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});