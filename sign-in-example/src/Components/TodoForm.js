import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";

const TodoForm = ({ addTodo, editingTodo, updateTodo }) => {
    const [text, setText] = useState(editingTodo ? editingTodo.text : '');

    useEffect(() => {
      setText(editingTodo ? editingTodo.text : '');
    }, [editingTodo])
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!text.trim()) return;
      if (editingTodo) {
        updateTodo(text);
      } else {
        addTodo({id: Date.now(), text});
      }
      setText('');
    };
  
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
  
  const mapStateToProps = (state) => {
    return {
      todos: state.todos,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addTodo: (todo) => dispatch({ type: "ADD_TODO_SAGA", payload: todo }),
      updateTodoState: (todo) => dispatch({ type: "UPDATE_TODO_SAGA", payload: todo }),
      deleteTodo: (id) => dispatch({ type: "DELETE_TODO_SAGA", payload: id }),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
