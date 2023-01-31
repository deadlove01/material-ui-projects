import React, { useEffect, useState } from 'react';

export const useTodoMain = () => {
    const [editingTodo, setEditingTodo] = useState(null);

    const onEdit = (todo) => {
        setEditingTodo(todo);
    };

    const onClearInput = () =>{
        setEditingTodo(null);
    }

    return {
        onEdit,
        onClearInput,
        editingTodo
    }
};
