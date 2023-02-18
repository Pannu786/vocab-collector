import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';

const DeleteConfirmation = ({ open, onClose, onConfirm, word, meaning }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete Word</DialogTitle>
      <DialogContent>
        Are you sure you want to delete "{word} - {meaning}"?
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onConfirm} color='error'>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmation;
