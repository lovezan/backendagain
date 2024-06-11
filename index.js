const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000; // Use the PORT variable from .env or default to 3000

app.get('/', (req, res) => {
  res.send('Hellaljdfahfhkaf')
});

app.get('/twitter', (req, res) => {
  res.send('here we go with twitter')
});

app.get('/login', (req, res) => {
  res.send('<h1> please login the base</h1>')
});

app.get('/youtube', (req, res) => {
  res.send('<h1> Talib or code</h1>')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
