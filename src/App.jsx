import { useState } from 'react';
import { Container, CssBaseline, Box, Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import AddWordsForm from './components/AddWordsForm';
import WordsList from './components/WordsList';
import wallpic from './assets/wallpic.jpg';

const App = () => {
  const [words, setWords] = useState([]); // initialize the words state as an empty array

  const [editWord, setEditWord] = useState('');

  const [editMeaning, setEditMeaning] = useState('');

  const [word, setWord] = useState(''); // initialize the word state as an empty string
  const [meaning, setMeaning] = useState(''); // initialize the meaning state as an empty string
  const [showAlert, setShowAlert] = useState(false);

  // Add a new word and its meaning to the words state
  const addWord = () => {
    const existingWord = words.find((w) => w.word === word);

    if (existingWord) {
      setShowAlert(true);
      return;
    }

    setWords([...words, { word, meaning }]);
    setWord('');
    setMeaning('');
  };

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100%',
          backgroundImage: `url(${wallpic})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      >
        <Container maxWidth='sm'>
          <Box sx={{ mt: '3rem' }}>
            <Typography
              variant='h3'
              component='h1'
              gutterBottom
              sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                textAlign: 'center',
              }}
            >
              Vocab Collector
            </Typography>
          </Box>
          {showAlert && (
            <Alert severity='info' onClose={() => setShowAlert(false)}>
              `{word} already exists`
            </Alert>
          )}
          <AddWordsForm
            word={word}
            meaning={meaning}
            setWord={setWord}
            setMeaning={setMeaning}
            addWord={addWord}
          />

          <WordsList
            words={words}
            setWords={setWords}
            word={word}
            meaning={meaning}
            setWord={setWord}
            editWord={editWord}
            editMeaning={editMeaning}
            setEditMeaning={setEditMeaning}
            setEditWord={setEditWord}
            setMeaning={setMeaning}
          />
        </Container>
      </Box>
    </>
  );
};

export default App;
