import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import * as React from 'react';
import { useState } from 'react';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditTodoDialog({ open, dialogHandler, todo, editTodo }) {
  const [editedText, setEditedText] = useState(todo.text)

  const textHandler = () => {
    editTodo(todo.id, editedText)
    dialogHandler()

  }


  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={dialogHandler}
      aria-describedby="alert-dialog-slide-description"
      fullWidth
    >
      <DialogTitle>{"Editando Tarefa"}</DialogTitle>
      <DialogContent>
        <TextField defaultValue={editedText} fullWidth onChange={(e) => setEditedText(e.target.value)} />
      </DialogContent>
      <DialogActions>
        <Button onClick={dialogHandler}>Cancelar</Button>
        <Button onClick={textHandler}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}
