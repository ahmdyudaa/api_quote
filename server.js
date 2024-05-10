const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const quotes = [
  {
    "content": "The only way to do great work is to love what you do.",
    "author": "Steve Jobs"
  },
  {
    "content": "In the end, it's not the years in your life that count. It's the life in your years.",
    "author": "Abraham Lincoln"
  },
  {
    "content": "Life is what happens when you're busy making other plans.",
    "author": "John Lennon"
  }
]

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json(quotes);
});

const port = 8080;

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});