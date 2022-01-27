const express = require('express');

// Server Setup
const PORT = 3000;

// Express Setup
const app = express();

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});