import { Box, List, ListItem, ListItemText } from '@mui/material';
import DeleteWords from './DeleteWords';

const WordsList = ({ words, setWords,word }) => {
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
