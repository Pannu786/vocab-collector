import {
  TextField,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';

const EditWord = ({
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
  i,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
    setEditWord(word);
    setEditMeaning(meaning);
  };

  const handleSave = () => {
    if (editWord.trim() === '' || editMeaning.trim() === '') {
      return;
    }
    const updatedWords = words.map((w, index) => {
      if (index === i) {
        return {
          word: editWord,
          meaning: editMeaning,
        };
      }
      return w;
    });
    setWords(updatedWords);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditWord('');
    setEditMeaning('');
  };

  return (
    <>
      <Dialog open={isEditing} onClose={handleCancel}>
        <DialogTitle>Edit Word</DialogTitle>
        <DialogContent>
          <TextField
            label='Edit Word'
            value={editWord}
            onChange={(e) => setEditWord(e.target.value)}
            fullWidth
            margin='dense'
          />
          <TextField
            label={'Edit Meaning'}
            value={editMeaning}
            onChange={(e) => setEditMeaning(e.target.value)}
            fullWidth
            margin='dense'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave}>Save</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </DialogActions>
      </Dialog>
      <IconButton onClick={handleEdit} size='small'>
        <EditIcon />
      </IconButton>
    </>
  );
};

export default EditWord;
