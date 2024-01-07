import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, addTodo, deleteTodo, editTodo } from './store/todos/todosSlice';
import Form from './Form';
import TodoList from './TodoList';

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAdd = (todo) => {
    dispatch(addTodo(todo));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (todo) => {
    dispatch(editTodo(todo));
  };

  const handleToggle = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    const updatedTodo = { ...todo, done: !todo.done };
    dispatch(editTodo(updatedTodo));
  };

  return (
    <div>
      <TodoList todos={todos} handleToggle={handleToggle} handleDelete={handleDelete} handleEdit={handleEdit} />
      <Form handleAdd={handleAdd} />
    </div>
  );
};

export default App;