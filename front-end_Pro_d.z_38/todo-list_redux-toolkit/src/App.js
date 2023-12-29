import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, addTodo, toggleTodo, deleteTodo, editTodo } from './store/todos/todosSlice';
import Form from './Form';
import TodoList from './TodoList';

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
        dispatch({ type: 'todos/setTodos', payload: JSON.parse(savedTodos) });
    } else {
        dispatch(fetchTodos());
    }
}, [dispatch]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (todo) => {
    dispatch(addTodo(todo));
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (todo) => {
    dispatch(editTodo(todo));
  };

  return (
    <div>
      <TodoList todos={todos} handleToggle={handleToggle} handleDelete={handleDelete} handleEdit={handleEdit} />
      <Form handleAdd={handleAdd} />
    </div>
  );
};

export default App;