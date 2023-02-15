import { Box, List, ListItem, ListItemText } from '@mui/material';
import DeleteWords from './DeleteWords';
import EditWord from './EditWord';

const WordsList = ({
  words,
  setWords,
  word,
  meaning,
  setWord,
  setMeaning,
  editWord,
  setEditWord,
  editMeaning,
  setEditMeaning,
}) => {
  return (
    <Box>
      {words.length > 0 ? (
        <List>
          {words.map(({ word, meaning }, i) => (
            <ListItem key={i}>
              <ListItemText primary={word} secondary={meaning} />{' '}
              <DeleteWords
                i={i}
                setWords={setWords}
                word={word}
                meaning={meaning}
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
