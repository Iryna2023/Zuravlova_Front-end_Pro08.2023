import React, { useReducer } from 'react';
import './App.css';

const initialState = { isEditing: false, editText: '' };

function reducer(state, action) {
  switch (action.type) {
    case 'SET_EDITING':
      return { ...state, isEditing: true, editText: action.text };
    case 'CANCEL_EDITING':
      return { ...state, isEditing: false };
    case 'UPDATE_TEXT':
      return { ...state, editText: action.text };
    default:
      throw new Error();
  }
}

const ListItem = ({ todo, handleToggle, handleDelete, handleEdit }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleEdit({ ...todo, text: state.editText });
    dispatch({ type: 'CANCEL_EDITING' });
  };

  return (
    <li className={`todo-item ${todo.done ? 'completed' : ''}`}>
      {state.isEditing ? (
        <form onSubmit={handleSubmit}>
          <input className="input" value={state.editText} onChange={(e) => dispatch({ type: 'UPDATE_TEXT', text: e.target.value })} />
          <button type="submit" className="button">Зберегти</button>
        </form>
      ) : (
        <span onClick={() => handleToggle(todo.id)} > {todo.text} </span>
      )}
      <div style={{ float: 'right' }}>
        <button onClick={() => handleDelete(todo.id)} className="button delete">Видалити</button>
        {!state.isEditing && (
          <button onClick={() => dispatch({ type: 'SET_EDITING', text: todo.text })} className="button"> Редагувати </button>
        )}
      </div>
    </li>
  );
};

export default ListItem;