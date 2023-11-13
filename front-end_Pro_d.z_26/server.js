const store = require('../front-end_Pro_d.z_23/js/index.js');
const express = require('express');
const app = express();
const path = require('path');

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><body><a id="basket-link">My First JSDOM!</a></body>`);

console.log(dom.window.document.querySelector("a").textContent);

app.use(express.static(path.join(__dirname, '../front-end_Pro_d.z_23')));

app.get('/api/data', (req, res) => {
    res.json({
        categories: store.categories,
        products: Array.from(store.products.entries())
    });
});

app.get('/basket', (req, res) => {
    res.json(store.basket);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});