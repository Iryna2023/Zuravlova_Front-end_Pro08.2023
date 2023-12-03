import React, { useState, useEffect } from 'react';
import './TodoList.css';

function TodoList() {
    const [todos, setTodos] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('todos')) || [];
        } catch (error) {
            console.error('Failed to parse todos from localStorage:', error);
            return [];
        }
});

const [input, setInput] = useState('');
const [editIndex, setEditIndex] = useState(null);

useEffect(() => {
    try {
        localStorage.setItem('todos', JSON.stringify(todos));
    } catch (error) {
        console.error('Failed to save todos to localStorage:', error);
    }
}, [todos]);

const handleToggle = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
};

const handleAdd = () => {
    if (input.trim() === '') {
        alert('Будь ласка, введіть завдання');
        return;
    }

    if (editIndex !== null) {
        const newTodos = [...todos];
        newTodos[editIndex].text = input;
        setTodos(newTodos);
        setEditIndex(null);
    } else {
        setTodos([...todos, { text: input, done: false }]);
    }
    setInput('');
};

const handleEdit = (index) => {
    setInput(todos[index].text);
    setEditIndex(index);
};

const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
};

return (
        <div>
            {todos.map((todo, index) => (
                <div className={`todo-item ${todo.done ? 'completed' : ''}`} key={index} onClick={() => handleToggle(index)}>
                    {todo.text}
                    <div>
                        <button className="edit" onClick={(e) => { e.stopPropagation(); handleEdit(index); }}>Редагувати</button>
                        <button className="delete" onClick={(e) => { e.stopPropagation(); handleDelete(index); }}>Видалити</button>
                    </div>
                </div>
            ))}
            <div>
                <input className="input" value={input} onChange={(e) => setInput(e.target.value)} />
                <button className="add" onClick={handleAdd}>{editIndex !== null ? 'Зберегти' : 'Додати'}</button>
            </div>
        </div>
    );
}

export default TodoList;