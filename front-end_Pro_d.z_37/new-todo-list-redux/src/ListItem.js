import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, editTodo } from './store/actions';

const ListItem = ({ todo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    const dispatch = useDispatch();
  
    const handleToggle = (id) => {
        if (!isEditing) {
            dispatch(toggleTodo(id));
        }
    };
  
    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };
  
    const handleEdit = (id, newText) => {
        dispatch(editTodo({ id, newText }));
        setIsEditing(false);
    };
  
    return (
        <div className={`todo-item ${todo.done ? 'completed' : ''}`} onClick={() => handleToggle(todo.id)}>
            {isEditing ? (
                <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onBlur={() => handleEdit(todo.id, editText)}
            />
        ) : (
            todo.text
        )}
            <div onClick={(e) => e.stopPropagation()}>
                <button className="delete" onClick={() => handleDelete(todo.id)}>Видалити</button>
                {!isEditing && <button onClick={() => setIsEditing(true)}>Редагувати</button>}
            </div>
        </div>
    );
};

export default ListItem;