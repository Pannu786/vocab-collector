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
    <Box sx={{ flexGrow: 1, }}>
      <List sx={{ maxHeight: '20rem', overflow: 'auto' }}>
        {words.length > 0 ? (
          words.map(({ word, meaning }, i) => (
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
          ))
        ) : (
          <ListItem>
            <ListItemText primary='No words added yet' />
          </ListItem>
        )}{' '}
      </List>
    </Box>
  );
};

export default WordsList;
