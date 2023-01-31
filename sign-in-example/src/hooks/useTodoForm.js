import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export const useTodoForm = (editingTodo, callback) => {
    const [text, setText] = useState(editingTodo ? editingTodo.text : '');

    const dispatch = useDispatch();
    const addTodo = (todo) => dispatch({ type: "ADD_TODO_SAGA", payload: todo });
    const updateTodo = (payload) => dispatch({ type: "UPDATE_TODO_SAGA", payload });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        if (editingTodo) {
            updateTodo({...editingTodo, text});            
        } else {
            addTodo({id: Date.now(), text});
        }
        setText('');
        callback();
    };

    useEffect(() => {
        setText(editingTodo ? editingTodo.text : '');
    }, [editingTodo]);

    return {
        handleSubmit,
        setText,
        text
    }
};
