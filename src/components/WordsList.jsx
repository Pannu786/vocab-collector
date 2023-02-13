import { Box, List, ListItem, ListItemText } from '@mui/material';

const WordsList = ({ words }) => {
  return (
    <Box>
      {words.length > 0 ? (
        <List>
          {words.map(({ word, meaning }, i) => (
            <ListItem key={i}>
              <ListItemText primary={word} secondary={meaning} />
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
