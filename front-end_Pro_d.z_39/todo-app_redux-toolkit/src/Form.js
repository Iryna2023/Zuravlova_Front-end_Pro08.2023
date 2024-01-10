import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './store/todosThunks';
import { TextField, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledBox = styled(Box)({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    margin: '10px',
});

const StyledTextField = styled(TextField)({
    width: '690px',
    margin: '30px 10px',
    borderRadius: '6px',
    border: '2px solid #807f7f',
});

const StyledButton = styled(Button)({
    padding: '7px 10px',
    borderRadius: '11px',
    backgroundColor: '#93ea9d',
    border: 'none',
    cursor: 'cell',
    '&:hover': {
        backgroundColor: '#39b300',
    },
});

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
        <StyledBox component="form">
        <StyledTextField value={input} onChange={(e) => setInput(e.target.value)} />
        <StyledButton variant="contained" color="primary" onClick={handleAdd}>
            Додати
        </StyledButton>
        </StyledBox>
    );
};

export default Form;