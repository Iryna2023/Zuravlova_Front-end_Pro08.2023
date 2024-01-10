import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, editTodo } from './store/todosThunks';
import { Card, CardContent, Typography, CardActions, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
    width: '380px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    wordBreak: 'break-all',
    backgroundColor: '#f5f9f2',
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    cursor: 'pointer',
    borderRadius: '2px 17px',
    border: '2px solid #807f7f',
}));

const ListItem = ({ todo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    const dispatch = useDispatch();

    const handleToggle = (id) => {
        if (!isEditing) {
        dispatch(toggleTodo(id));
        }
    };

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    const handleEdit = (id, newText) => {
        dispatch(editTodo({ id, newText }));
        setIsEditing(false);
    };

    return (
        <StyledCard onClick={() => handleToggle(todo.id)} style={{ textDecoration: todo.done ? 'line-through' : 'none', color: todo.done ? '#7a7878' : 'inherit' }}>
        <CardContent>
            {isEditing ? (
            <TextField value={editText} onChange={(e) => setEditText(e.target.value)} onBlur={() => handleEdit(todo.id, editText)} />
            ) : (
            <Typography variant="body2" color="text.secondary">
                {todo.text}
            </Typography>
            )}
        </CardContent>
        <CardActions>
            <IconButton aria-label="delete" onClick={(e) => { e.stopPropagation(); handleDelete(todo.id); }}>
            <DeleteIcon />
            </IconButton>
            {!isEditing && (
            <IconButton aria-label="edit" onClick={(e) => { e.stopPropagation(); setIsEditing(true); }}>
                <EditIcon />
            </IconButton>
            )}
        </CardActions>
        </StyledCard>
    );
};

export default ListItem;