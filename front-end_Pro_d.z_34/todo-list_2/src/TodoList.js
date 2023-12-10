import React from 'react';
import ListItem from './ListItem';

const TodoList = ({ todos, handleToggle, handleEdit, handleDelete }) => (
    <div>
        {todos.map((todo, index) => (
            <ListItem key={todo.id} todo={todo} index={index} handleToggle={handleToggle} handleEdit={handleEdit} handleDelete={handleDelete} />
        ))}
    </div>
);

export default TodoList;