const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/gethello', (req, res) => {
  res.send('Hello NodeJS!!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
