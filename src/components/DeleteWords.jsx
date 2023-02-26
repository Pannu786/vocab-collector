import { useState } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteConfirmation from './DeleteConfirmation';

const DeleteWords = ({ setWords, i, meaning, word, words, deleteWord }) => {
  const [confirmationOpen, setConfirmationOpen] = useState(false);

  const handleDelete = () => {
    setConfirmationOpen(true);
  };

  const handleConfirmDelete = () => {
    if (words) {
      deleteWord(i);
    }

    setConfirmationOpen(false);
  };

  const handleCancelDelete = () => {
    setConfirmationOpen(false);
  };

  // const deletedWord = () => {
  //   setWords((prevWords) => [...prevWords.filter((_, index) => index !== i)]);
  // };

  return (
    <>
      <IconButton onClick={handleDelete} aria-label='delete'>
        <DeleteIcon />
      </IconButton>
      <DeleteConfirmation
        open={confirmationOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        meaning={meaning}
        word={word}
      />
    </>
  );
};

export default DeleteWords;
