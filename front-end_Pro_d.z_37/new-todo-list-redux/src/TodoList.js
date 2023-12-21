import React from 'react';
import ListItem from './ListItem';
import { useSelector } from 'react-redux';
import './App.css'

const TodoList = () => {
    const todos = useSelector(state => state.todos);

return (
    <div>
      {todos.map((todo, index) => (
        <ListItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;