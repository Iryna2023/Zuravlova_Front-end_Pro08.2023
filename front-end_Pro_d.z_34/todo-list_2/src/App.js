import React, { useState, useEffect } from 'react';
import List from './TodoList';
import Form from './Form';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);
    
  useEffect(() => {
    try {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(todos);
    } catch (error) {
        console.error('Failed to parse todos from localStorage. The current content of todos in localStorage is:', localStorage.getItem('todos'), 'Error:', error);
    }
}, []);

useEffect(() => {
    try {
        localStorage.setItem('todos', JSON.stringify(todos));
    } catch (error) {
        console.error('Failed to save todos to localStorage. The current state of todos is:', todos, 'Error:', error);
    }
}, [todos]);

const handleToggle = (id) => {
  setTodos(todos => todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo));
};

    const handleAdd = () => {
        if (input.trim() === '') {
            alert('Будь ласка, введіть завдання');
            return;
        }

        if (editIndex !== null) {
            setTodos(todos => todos.map((todo, index) => index === editIndex ? { ...todo, text: input } : todo));
            setEditIndex(null);
            setInput('');
        } else {
            const newTodo = { id: Date.now(), text: input, done: false };
            setTodos(todos => [...todos, newTodo]);
            setInput('');
        }
    };

    const handleEdit = (index) => {
        setInput(todos[index].text);
        setEditIndex(index);
    };

    const handleDelete = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <List todos={todos} handleToggle={handleToggle} handleEdit={handleEdit} handleDelete={handleDelete} />
            <Form input={input} editIndex={editIndex} handleAdd={handleAdd} setInput={setInput} />
        </div>
    );
}

export default React.memo(App);