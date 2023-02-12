import { useState } from 'react';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import wallpic from './assets/wallpic.jpg';

const App = () => {
  const [words, setWords] = useState([]); // initialize the words state as an empty array

  const [word, setWord] = useState(''); // initialize the word state as an empty string
  const [meaning, setMeaning] = useState(''); // initialize the meaning state as an empty string

  // Add a new word and its meaning to the words state
  const addWord = () => {
    setWords([...words, { word, meaning }]);
    setWord('');
    setMeaning('');
  };

  // Render the form for adding a new word and its meaning
  const renderForm = () => (
    <Box display='flex' flexDirection='column' alignItems='center' mt={2}>
      <TextField
        label='Add-Word'
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <TextField
        label='Meaning'
        value={meaning}
        onChange={(e) => setMeaning(e.target.value)}
      />
      <Button onClick={addWord}>Add Word</Button>
    </Box>
  );

  // Render the list of words
  const renderList = () => (
    <List>
      {words.map(({ word, meaning }, index) => (
        <ListItem key={index}>
          <div>{word}</div>
          <div>{meaning}</div>
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          position: 'absolute',
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
          {renderForm()}
          {renderList()}
        </Container>
      </Box>
    </>
  );
};

export default App;
