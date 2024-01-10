import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import { CssBaseline } from '@mui/material';

const root = document.getElementById('root');
createRoot(root).render(
    <React.StrictMode>
        <Provider store={store}>
        <CssBaseline />
        <App />
        </Provider>
    </React.StrictMode>
);