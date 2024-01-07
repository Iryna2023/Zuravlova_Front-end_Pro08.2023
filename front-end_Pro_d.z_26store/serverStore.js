const express = require('express');
const app = express();
const path = require('path');

const data = require('./data.js');

app.use(express.static(path.join(__dirname, 'store23')));

app.get('/api/data', (req, res) => {
    res.json({
        categories: data.categories,
        products: Array.from(data.products.values()).flat()
    });
});

app.get('/basket', (req, res) => {
    res.json(data.basket);
});

app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});