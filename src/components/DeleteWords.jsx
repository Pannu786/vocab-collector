import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteWords = ({ setWords, i, word, meaning }) => {
  return (
    <IconButton
      onClick={() => {
        console.log(`Delete word${word}`);
        setWords((prevWords) => [...prevWords.filter((_, index) => index !== i)]);
      }}
    >
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteWords;
