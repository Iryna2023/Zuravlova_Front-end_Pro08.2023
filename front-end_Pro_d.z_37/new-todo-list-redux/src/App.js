import React from 'react';
import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './actions';
import List from './TodoList';
import Form from './Form';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <AppComponent />
    </Provider>
  );
};

const AppComponent = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
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