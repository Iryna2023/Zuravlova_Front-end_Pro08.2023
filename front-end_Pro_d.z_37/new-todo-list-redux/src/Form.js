import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './store/actions';

const Form = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim() === '') {
      alert('Будь ласка, введіть завдання');
      return;
    }

    const newTodo = { id: Date.now(), text: input, done: false };
    dispatch(addTodo(newTodo));
    setInput('');
  };

  return (
    <div>
      <input className="input" value={input} onChange={(e) => setInput(e.target.value)} />
      <button className="add" onClick={handleAdd}>Додати</button>
    </div>
  );
};

export default Form;