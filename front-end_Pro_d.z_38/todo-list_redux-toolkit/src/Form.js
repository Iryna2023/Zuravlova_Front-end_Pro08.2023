import React, { useState } from 'react';

const Form = ({ handleAdd }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() === '') {
      alert('Будь ласка, введіть завдання');
    } else {
      handleAdd({ id: Date.now(), text: input, done: false });
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit">Додати</button>
    </form>
  );
};

export default Form;