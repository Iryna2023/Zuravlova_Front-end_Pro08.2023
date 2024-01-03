import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://6595671804335332df82a7ee.mockapi.io/api',
    timeout: 1000,
});

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await api.get('/todos');
    return response.data;
});

export const addTodo = createAsyncThunk('todos/addTodo', async (todo) => {
    const response = await api.post('/todos', todo);
    return response.data;
});

export const toggleTodo = createAsyncThunk('todos/toggleTodo', async (id, { getState }) => {
    const todo = getState().todos.find(todo => todo.id === id);
    const updatedTodo = { ...todo, done: !todo.done };
    const response = await api.put(`/todos/${id}`, updatedTodo);
    return response.data;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
    const response = await api.delete(`/todos/${id}`);
    return response.data;
});

export const editTodo = createAsyncThunk('todos/editTodo', async ({ id, newText }, { getState }) => {
    const todo = getState().todos.find(todo => todo.id === id);
    const updatedTodo = { ...todo, text: newText };
    const response = await api.put(`/todos/${id}`, updatedTodo);
    return response.data;
});