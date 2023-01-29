import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { connect, useSelector } from "react-redux";

const TodoMain = ({ todos, updateTodoState }) => {
  //   const [todos, setTodos] = useState([
  //     {
  //       id: 1,
  //       text: "Learn React",
  //     },
  //     {
  //       id: 2,
  //       text: "Learn Material UI",
  //     },
  //   ]);
  const [editingTodo, setEditingTodo] = useState(null);

  const onEdit = (todo) => {
    setEditingTodo(todo);
  };

  const updateTodo = (text) => {
    // const updatedTodos = todos.map((todo) => {
    //   if (todo.id === editingTodo.id) {
    //     return { ...todo, text };
    //   }
    //   return todo;
    // });
    // setTodos(updatedTodos);

    let updateTodo = todos.find((x) => x.id === editingTodo.id);
    if (updateTodo) {
      updateTodo = { ...updateTodo, text };
    }

    updateTodoState(updateTodo);
    setEditingTodo(null);
  };

  return (
    <div>
      <TodoForm editingTodo={editingTodo} updateTodo={updateTodo} />
      <TodoList onEdit={onEdit} />
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
    updateTodoState: (todo) =>
      dispatch({ type: "UPDATE_TODO_SAGA", payload: todo }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoMain);
