import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO } from './types';

export const addTodo = payload => ({ type: ADD_TODO, payload });
export const toggleTodo = payload => ({ type: TOGGLE_TODO, payload });
export const deleteTodo = payload => ({ type: DELETE_TODO, payload });
export const editTodo = payload => ({ type: EDIT_TODO, payload });