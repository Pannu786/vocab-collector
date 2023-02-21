import { Typography, Box, Container, Button, TextField } from '@mui/material';

const AddWordsForm = ({ word, setWord, meaning, setMeaning, addWord }) => {
  return (
    <>
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
          sx={{ m: 'auto', p: 1, width: 100 }}
          onClick={addWord}
          font='bold'
        >
          New Word
        </Button>
      </Box>
    </>
  );
};

export default AddWordsForm;
