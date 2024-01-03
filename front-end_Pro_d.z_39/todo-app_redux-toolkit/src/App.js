import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, addTodo, toggleTodo, deleteTodo } from './store/todosThunks';
import List from './TodoList';
import Form from './Form';

const App = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleAdd = (todo) => {
    dispatch(addTodo(todo));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <List todos={todos} handleToggle={handleToggle} handleDelete={handleDelete} />
      <Form handleAdd={handleAdd} />
    </div>
  );
};

export default App;