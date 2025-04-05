console.log("Prodduct service démarré...")
const express = require('express');
const app = express();
app.use(express.json());

const products = [{ id: 1, name: 'Laptop' }, { id: 2, name: 'Mouse' }];

app.get('/products', (req, res) => res.json(products));
app.get('/health', (req, res) => res.send('Product OK'));

app.listen(3002, () => console.log('Product Service on 3002'));
console.log("Product Service is running...");
