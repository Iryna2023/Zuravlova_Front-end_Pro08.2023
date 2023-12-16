import React from 'react';

const Form = ({ input, editIndex, handleAdd, setInput }) => (
    <div>
        <input className="input" value={input} onChange={(e) => setInput(e.target.value)} />
        <button className="add" onClick={handleAdd}>{editIndex !== null ? 'Зберегти' : 'Додати'}</button>
    </div>
);

export default Form;