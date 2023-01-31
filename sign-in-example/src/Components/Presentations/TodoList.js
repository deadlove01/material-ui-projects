import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onEdit, deleteTodo }) => {  
    return (
      <div>
        {todos && todos.map((todo) => (
          <Todo todo={todo} key={todo.id} onEdit={onEdit} onDelete={deleteTodo} />
        ))}
      </div>
    );
  };

  export default TodoList;
