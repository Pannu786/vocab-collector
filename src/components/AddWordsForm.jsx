import { Typography, Box, Container, Button, TextField } from '@mui/material';

const AddWordsForm = ({ word, setWord, meaning, setMeaning, addWord }) => {
  return (
    <Container
      sx={{
        zIndex: 1,
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
        <Box
          size='small'
          variant='outlined'
          sx={{ m: 'auto', p: 1, mb: '1rem' }}
        >
          <Button
            variant='contained'
            onClick={addWord}
            font='bold'
            disabled={!word || !meaning}
          >
            New Word
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddWordsForm;
