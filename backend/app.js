const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5173;

const wordSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true,
    minlength: 2,
  },
  meaning: {
    type: String,
    required: true,
    minlength: 5,
  },
});

const Word = mongoose.model('Word', wordSchema);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Server is up and running yo!');
});

app.get('/api/words', async (req, res) => {
  try {
    const words = await Word.find({});
    res.status(200).json(words);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.put('/api/words/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { word, meaning } = req.body;

    const updatedWord = await Word.findByIdAndUpdate(
      id,
      { word, meaning },
      { new: true }
    );

    res.status(200).json(updatedWord);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/words', async (req, res) => {
  try {
    const { word, meaning } = req.body;
    const newWord = new Word({ word, meaning });
    const saveWord = await newWord.save();
    res.status(201).json(saveWord);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});
mongoose
  .connect('mongodb://localhost/words-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log(err));
