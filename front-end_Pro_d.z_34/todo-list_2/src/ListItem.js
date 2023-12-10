import React from 'react';

const ListItem = ({ todo, index, handleToggle, handleEdit, handleDelete }) => (
    <div className={`todo-item ${todo.done ? 'completed' : ''}`} onClick={() => handleToggle(todo.id)}>
        {todo.text}
        <div>
            <button className="edit" onClick={(e) => { e.stopPropagation(); handleEdit(index); }}>Редагувати</button>
            <button className="delete" onClick={(e) => { e.stopPropagation(); handleDelete(todo.id); }}>Видалити</button>
        </div>
    </div>
);

export default ListItem;