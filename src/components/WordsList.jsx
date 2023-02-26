import {
  Box,
  List,
  ListItem,
  ListItemText,
  Container,
  Pagination,
} from '@mui/material';
import DeleteWords from './DeleteWords';
import EditWord from './EditWord';
import { useState } from 'react';

const PAGE_SIZE = 4;

const WordsList = ({
  words,
  setWords,
  setWord,
  setMeaning,
  editWord,
  setEditWord,
  editMeaning,
  setEditMeaning,
  deleteWord,
}) => {
  const [page, setPage] = useState(1);
  const numPages = Math.ceil(words.length / PAGE_SIZE);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container fixed maxWidth='md' sx={{ flexGrow: 1 }}>
      <List
        sx={{
          maxHeight: '20rem',
          overflow: 'auto',
          top: 5,
          position: 'relative',
        }}
      >
        {words
          .slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
          .map(({ word, meaning }, i) => (
            <ListItem
              key={i}
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <ListItemText primary={word} secondary={meaning} />{' '}
              <DeleteWords
                i={i}
                setWords={setWords}
                words={words}
                meaning={meaning}
                word={word}
                deleteWord={deleteWord}
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
                i={i + (page - 1) * PAGE_SIZE}
              />
            </ListItem>
          ))}
        {words.length === 0 && (
          <ListItem>
            <ListItemText primary='No words added yet' />
          </ListItem>
        )}
      </List>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination
          count={numPages}
          page={page}
          onChange={handlePageChange}
          size='small'
        />
      </Box>
    </Container>
  );
};

export default WordsList;
