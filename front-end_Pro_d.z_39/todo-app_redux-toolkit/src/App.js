import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from './store/todosThunks';
import List from './TodoList';
import Form from './Form';
import { Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f44336',
    },
  },
});

const App = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <List todos={todos} />
        <Form />
      </Container>
    </ThemeProvider>
  );
};

export default App;