import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import { connect, useSelector } from "react-redux";

const TodoList = ({ todos, onEdit, deleteTodo }) => {

    // const todos = useSelector((state) => state.todos);
    // const [localTodos, setLocalTodos] = useState(todos);
    // useEffect(() => {
    //   setLocalTodos(todos);
    // }, [todos])
    

    return (
      <div>
        {todos && todos.map((todo) => (
          <Todo todo={todo} key={todo.id} onEdit={onEdit} onDelete={deleteTodo} />
        ))}
      </div>
    );
  };
  
  const mapStateToProps = (state) => {
    return {
      todos: state.todos,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      deleteTodo: (id) => dispatch({ type: "DELETE_TODO_SAGA", payload: id }),
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
