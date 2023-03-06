const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Server is up and running yo!');
});

app.get('/api/words', (req, res) => {
  // TODO: fetch all words from the database and send them as a response
});

app.post('/api/words', (req, res) => {
  //TODO: add a new word to the database
});

app.put('/api/words/:id', (req, res) => {
  //TODO: update the word with the given id in the database
});
