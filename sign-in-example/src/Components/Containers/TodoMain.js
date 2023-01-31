import React, { useState } from "react";
import TodoForm from "../Presentations/TodoForm";
import TodoList from "../Presentations/TodoList";
import { useTodoMain } from "../../hooks/useTodoMain";
import { connect } from "react-redux";

const TodoMain = ({todos, deleteTodo}) => {
  const { onEdit, onClearInput, editingTodo} = useTodoMain();

  return (
    <div>
      <TodoForm 
        editingTodo={editingTodo} onClearInput={onClearInput}
      />
      <TodoList onEdit={onEdit} todos={todos} deleteTodo={deleteTodo} />
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

export default connect(mapStateToProps, mapDispatchToProps)(TodoMain);
