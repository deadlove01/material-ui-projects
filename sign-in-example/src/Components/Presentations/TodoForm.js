import { Button, TextField } from '@mui/material';
import React from 'react';
import { useTodoForm } from '../../hooks/useTodoForm';

const TodoForm = ({ editingTodo, onClearInput }) => {

  const { handleSubmit, setText, text } =  useTodoForm(editingTodo, () => {
    onClearInput();
  });
  
    return (
      <form onSubmit={handleSubmit}>
        <TextField
          label="Todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
          margin="normal"
          fullWidth
        />
        <Button type="submit" color="primary" variant="contained">
          {editingTodo ? 'Update' : 'Add'}
        </Button>
      </form>
    );
  };
  
  export default TodoForm;
