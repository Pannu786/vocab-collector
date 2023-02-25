import { Typography, Box, Container, Button, TextField } from '@mui/material';

const AddWordsForm = ({ word, setWord, meaning, setMeaning, addWord }) => {
  return (
    <Container
      sx={{
        position: 'fixed',
        top: 59,
        left: 0,
        right: 0,
        zIndex: 1,
        '@media (max-width: 600px)': {
          // adjust for smaller screens
          top: '20%',
          maxHeight: '70vh',
        },
        textAlgin: 'center',
      }}
      maxWidth='sm'
    >
      <Box display='flex' flexDirection='column' width='100%'>
        <TextField
          variant='standard'
          label='Add New Word'
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <TextField
          variant='standard'
          label='Add Meaning'
          value={meaning}
          onChange={(e) => setMeaning(e.target.value)}
        />
        <Button
          size='small'
          variant='outlined'
          sx={{ m: 'auto', p: 1, width: 100, my: 4 }}
          onClick={addWord}
          font='bold'
          disabled={!word || !meaning}
        >
          New Word
        </Button>
      </Box>
    </Container>
  );
};

export default AddWordsForm;
