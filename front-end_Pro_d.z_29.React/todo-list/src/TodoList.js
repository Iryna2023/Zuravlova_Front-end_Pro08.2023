<<<<<<< HEAD
import React from 'react';
import './TodoList.css';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            input: '',
            editIndex: null
        };
    }

    componentDidMount() {
        try {
            const todos = JSON.parse(localStorage.getItem('todos')) || [];
            this.setState({ todos });
        } catch (error) {
            console.error('Failed to parse todos from localStorage:', error);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.todos !== this.state.todos) {
            try {
                localStorage.setItem('todos', JSON.stringify(this.state.todos));
            } catch (error) {
                console.error('Failed to save todos to localStorage:', error);
            }
        }
    }

    handleToggle = (index) => {
        const newTodos = [...this.state.todos];
        newTodos[index].done = !newTodos[index].done;
        this.setState({ todos: newTodos });
    };

    handleAdd = () => {
        if (this.state.input.trim() === '') {
            alert('Будь ласка, введіть завдання');
            return;
        }

        const newTodos = [...this.state.todos];
        if (this.state.editIndex !== null) {
            newTodos[this.state.editIndex].text = this.state.input;
            this.setState({ todos: newTodos, editIndex: null, input: '' });
        } else {
            newTodos.push({ text: this.state.input, done: false });
            this.setState({ todos: newTodos, input: '' });
        }
    };

    handleEdit = (index) => {
        this.setState({ input: this.state.todos[index].text, editIndex: index });
    };

    handleDelete = (index) => {
        const newTodos = this.state.todos.filter((_, i) => i !== index);
        this.setState({ todos: newTodos });
    };

    render() {
        return (
            <div>
                {this.state.todos.map((todo, index) => (
                    <div className={`todo-item ${todo.done ? 'completed' : ''}`} key={index} onClick={() => this.handleToggle(index)}>
                        {todo.text}
                        <div>
                            <button className="edit" onClick={(e) => { e.stopPropagation(); this.handleEdit(index); }}>Редагувати</button>
                            <button className="delete" onClick={(e) => { e.stopPropagation(); this.handleDelete(index); }}>Видалити</button>
                        </div>
                    </div>
                ))}
                <div>
                    <input className="input" value={this.state.input} onChange={(e) => this.setState({ input: e.target.value })} />
                    <button className="add" onClick={this.handleAdd}>{this.state.editIndex !== null ? 'Зберегти' : 'Додати'}</button>
                </div>
            </div>
        );
    }
=======
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
>>>>>>> 9baebf11956d35cbad59bc4e7f6b7b26321d4d21
}

export default TodoList;