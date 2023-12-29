import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  try {
    const response = await axios.get('https://658ec29b2871a9866e79bfcc.mockapi.io/api/todos');
    if (response.status !== 200) {
      throw new Error(`Error: ${response.status}`);
    }
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      console.error('Server did not return an array');
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
});

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      if (Array.isArray(state)) {
        state.push(action.payload);
      } else {
        console.error('State is not an array');
      }
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    editTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.newText;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      if (Array.isArray(action.payload)) {
        return [...action.payload];
      } else {
        console.error('Payload is not an array');
        return state;
      }
    });
  },
});

export const { addTodo, toggleTodo, deleteTodo, editTodo } = todosSlice.actions;
export default todosSlice.reducer;