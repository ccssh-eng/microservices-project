// index.js
console.log("Payment service démarré...")
// payment-service/index.js
const express = require('express');
const app = express();
const PORT = 3005;
process.on('uncaughtException', console.error);
app.use(express.json());
app.get('/api/payment/health', (req, res) => res.send('Payment Service running!'));

app.listen(PORT, () => {
  console.log(`Payment Service listening on port ${PORT}`);
});

app.post('/api/payment/register', (req, res) => {
  const { username, cartnum, amount } = req.body;

  // Just echoing back the data for now
  res.status(201).json({
    message: 'Payment registered successfully!',
    payment: { username, cartnum, amount }
  });
});
console.log("Payment Service is running...");
