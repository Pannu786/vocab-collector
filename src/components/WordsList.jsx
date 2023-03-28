import {
  Box,
  List,
  ListItem,
  ListItemText,
  Container,
  Pagination,
  TextField,
} from '@mui/material';
import { getAllWords, createWord, updateWord, deleteWord } from '../api';
import DeleteWords from './DeleteWords';
import EditWord from './EditWord';
import { useState, useEffect } from 'react';

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
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getAllWords().then((data) => {
      setWords(data);
    });
  }, []);

  const filteredWords = words.filter((w) =>
    w.word.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const numPages = Math.ceil(words.length / PAGE_SIZE);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(1);
  };


  const handleUpdateWord = (i, newWord, newMeaning) => {
    updateWord(words[i]._id, newWord, newMeaning).then(() => {
      const updatedWords = [...words];
      updatedWords[i].word = newWord;
      updatedWords[i].meaning = newMeaning;
      setWords(updatedWords);
      setEditWord('');
      setEditMeaning('');
    });
  };
  
  return (
    <Container fixed maxWidth='md' sx={{ flexGrow: 1 }}>
      <TextField
        size='small'
        label='Search Word '
        value={searchTerm}
        onChange={handleSearchChange}
        fullWidth
        margin='dense'
      />
      <List
        sx={{
          maxHeight: '20rem',
          overflow: 'auto',
          top: 5,
          position: 'relative',
        }}
      >
        {filteredWords
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
                handleUpdateWord={handleUpdateWord}
              />
            </ListItem>
          ))}
        {filteredWords.length === 0 && (
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
