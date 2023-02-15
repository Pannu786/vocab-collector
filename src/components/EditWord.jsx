import { TextField, Button, IconButton } from '@mui/material';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import WordsList from './WordsList';

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
    const updatedWords = words.map((w, index) => {
      if (index === i) {
        return { word: editWord, meaning: editMeaning };
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
      {isEditing ? (
        <>
          <TextField
            label='Edit Word'
            value={editWord}
            onChange={(e) => setEditWord(e.target.value)}
            sx={{ mr: 1 }}
          />
          <TextField
            label={'Edit Meaning'}
            value={editMeaning}
            onChange={(e) => setEditMeaning(e.target.value)}
            sx={{ mr: 1 }}
          />
          <Button onClick={handleSave} sx={{ mr: 1 }}>
            Save
          </Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </>
      ) : (
        <IconButton onClick={handleEdit} size='large'>
          <EditIcon />
        </IconButton>
      )}
    </>
  );
};

export default EditWord;
