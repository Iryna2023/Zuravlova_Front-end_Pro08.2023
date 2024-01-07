import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todos/todosSlice';
import { loadState, saveState } from '../localStorage';

const preloadedState = loadState(); 

const store = configureStore({
  reducer: {
    todos: todosReducer
  },
  preloadedState: preloadedState ? preloadedState : { todos: [] },
});

store.subscribe(() => {
  saveState({
    todos: store.getState().todos
  });
});

export default store;