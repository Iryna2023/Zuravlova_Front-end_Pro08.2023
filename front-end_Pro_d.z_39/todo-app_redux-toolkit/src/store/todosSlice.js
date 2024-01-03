import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos, addTodo, toggleTodo, deleteTodo, editTodo } from './todosThunks';

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.fulfilled, (state, action) => {
            return action.payload;
        })
        .addCase(fetchTodos.rejected, (state, action) => {
            console.error('Помилка при завантаженні todos:', action.error);
        })
        .addCase(addTodo.fulfilled, (state, action) => {
            state.push(action.payload);
        })
        .addCase(addTodo.rejected, (state, action) => {
            console.error('Помилка при додаванні todo:', action.error);
        })
        .addCase(toggleTodo.fulfilled, (state, action) => {
            const todo = state.find(todo => todo.id === action.payload.id);
            if (todo) {
            todo.done = action.payload.done;
            }
        })
        .addCase(toggleTodo.rejected, (state, action) => {
            console.error('Помилка при перемиканні стану todo:', action.error);
        })
        .addCase(deleteTodo.fulfilled, (state, action) => {
            return state.filter(todo => todo.id !== action.payload.id);
        })
        .addCase(deleteTodo.rejected, (state, action) => {
            console.error('Помилка при видаленні todo:', action.error);
        })
        .addCase(editTodo.fulfilled, (state, action) => {
            const todo = state.find(todo => todo.id === action.payload.id);
            if (todo) {
            todo.text = action.payload.text;
            }
        })
        .addCase(editTodo.rejected, (state, action) => {
            console.error('Помилка при редагуванні todo:', action.error);
        });
    },
});

export default todosSlice.reducer;