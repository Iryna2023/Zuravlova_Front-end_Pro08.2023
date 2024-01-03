import React from 'react';
import ListItem from './ListItem';
import './App.css'

const TodoList = ({ todos, handleToggle, handleDelete, handleEdit }) => {
    if (!Array.isArray(todos)) {
        return null;
    }

    return (
        <ul>
            {todos.map((todo) => (
                <ListItem key={todo.id} todo={todo} handleToggle={handleToggle} handleDelete={handleDelete} handleEdit={handleEdit} />
            ))}
        </ul>
    );
};
  
export default TodoList;