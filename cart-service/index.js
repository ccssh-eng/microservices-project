// index.js
console.log("Auth service démarré...")
// cart-service/index.js
const express = require('express');
const app = express();
const PORT = 3004;
process.on('uncaughtException', console.error);
app.use(express.json());
app.get('/api/cart/health', (req, res) => res.send('Cart Service running!'));

app.listen(PORT, () => {
  console.log(`Cart Service listening on port ${PORT}`);
});

app.post('/api/cart/register', (req, res) => {
  const { username, cartnum, carttype } = req.body;

  // Just echoing back the data for now
  res.status(201).json({
    message: 'Cart registered successfully!',
    cart: { username, cartnum, carttype }
  });
});
console.log("Cart Service is running...");
