// index.js
console.log("Order service démarré...")
// auth-service/index.js
const express = require('express');
const app = express();
const PORT = 3003;
process.on('uncaughtException', console.error);
app.use(express.json());
app.get('/api/order/health', (req, res) => res.send('Order Service running!'));

app.listen(PORT, () => {
  console.log(`Order Service listening on port ${PORT}`);
});

app.post('/api/order/register', (req, res) => {
  const { name, product, quantity } = req.body;

  // Just echoing back the data for now
  res.status(201).json({
    message: 'Order registered successfully!',
    order: { name, product, quantity }
  });
});
console.log("Order Service is running...");
