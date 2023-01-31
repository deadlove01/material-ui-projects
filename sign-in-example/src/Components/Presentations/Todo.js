import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import React from 'react';

const Todo = ({ todo, onEdit, onDelete }) => {
    return (
      <List>
        <ListItem>
          <ListItemText primary={todo.text} />
          <ListItemSecondaryAction>
            <IconButton aria-label="Edit" onClick={() => onEdit(todo)}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="Delete" onClick={() => onDelete(todo.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    );
  };
  

export default Todo;
