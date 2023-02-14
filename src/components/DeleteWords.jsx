import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteWords = ({ setWords, i, word, meaning, setMeaning }) => {
  const deletedWord = () => {
    setWords((prevWords) => [...prevWords.filter((_, index) => index !== i)]);
  };

  return (
    <IconButton onClick={deletedWord}>
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteWords;
