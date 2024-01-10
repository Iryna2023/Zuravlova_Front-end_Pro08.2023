import React from 'react';
import ListItem from './ListItem';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';

const TodoList = () => {
  const todos = useSelector(state => state.todos);

  return (
    <Grid container spacing={2}>
      {todos.map((todo) => (
        <Grid item key={todo.id}>
          <ListItem todo={todo} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TodoList;