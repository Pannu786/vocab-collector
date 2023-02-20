import { Box, List, ListItem, ListItemText } from '@mui/material';
import DeleteWords from './DeleteWords';
import EditWord from './EditWord';

const WordsList = ({
  words,
  setWords,
  setWord,
  setMeaning,
  editWord,
  setEditWord,
  editMeaning,
  setEditMeaning,
}) => {
  return (
    <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
      {words.length > 0 ? (
        <List sx={{ py: 2 }}>
          {words.map(({ word, meaning }, i) => (
            <ListItem key={i}>
              <ListItemText primary={word} secondary={meaning} />{' '}
              <DeleteWords
                i={i}
                setWords={setWords}
                words={words}
                meaning={meaning}
                word={word}
              />
              <EditWord
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
                i={i}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <ListItem>
          <ListItemText primary='No words added yet' />
        </ListItem>
      )}
    </Box>
  );
};

export default WordsList;
