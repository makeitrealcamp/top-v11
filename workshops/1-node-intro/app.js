const express = require('express');

const PORT = 4200;

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello Topv11!');
});

app.get('/about', (req, res) => {
  res.status(200).send('About Page');
});

app.get('/blog', (req, res) => {
  res.status(200).send('Blog Page');
});

app.get('/contact', (req, res) => {
  res.status(200).send('Contact Page');
});

app.listen(PORT, () => {
  console.log(`Basic node server running on port ${PORT}`);
});