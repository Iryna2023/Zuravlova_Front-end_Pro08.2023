import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get('https://658ec29b2871a9866e79bfcc.mockapi.io/api/todos');
  return response.data;
});

export const addTodo = createAsyncThunk('todos/addTodo', async (todo) => {
  const response = await axios.post('https://658ec29b2871a9866e79bfcc.mockapi.io/api/todos', todo);
  return response.data;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  await axios.delete(`https://658ec29b2871a9866e79bfcc.mockapi.io/api/todos/${id}`);
  return id;
});

export const editTodo = createAsyncThunk('todos/editTodo', async (todo) => {
  const response = await axios.put(`https://658ec29b2871a9866e79bfcc.mockapi.io/api/todos/${todo.id}`, todo);
  return response.data;
});

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        return state.filter((todo) => todo.id !== action.payload);
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        const index = state.findIndex((todo) => todo.id === action.payload.id);
        if (index !== -1) {
          state[index] = action.payload;
        }
      });
  },
});

export default todosSlice.reducer;