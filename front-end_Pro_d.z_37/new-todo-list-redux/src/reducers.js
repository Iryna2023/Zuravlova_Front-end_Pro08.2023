export const todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.payload ? { ...todo, done: !todo.done } : todo
            );
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload);
            default:
                return state;
        case 'EDIT_TODO':
            return state.map(todo =>
                todo.id === action.payload.id ? { ...todo, text: action.payload.newText } : todo
            );
    }
};