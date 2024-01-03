import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';
import { loadState, saveState } from '../localStorage'; 

const preloadedState = loadState(); 

export const store = configureStore({
  reducer: {todos: todosReducer},
  preloadedState: preloadedState ? preloadedState : { todos: [] },
}); 

store.subscribe(() => {
  saveState({todos: store.getState().todos});
});