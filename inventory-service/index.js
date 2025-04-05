// index.js
console.log("Inventory service démarré...")
// inventory-service/index.js
const express = require('express');
const app = express();
const PORT = 3006;
process.on('uncaughtException', console.error);
app.use(express.json());
app.get('/api/inventory/health', (req, res) => res.send('Inventory Service running!'));

app.listen(PORT, () => {
  console.log(`Inventory Service listening on port ${PORT}`);
});

app.post('/api/inventory/register', (req, res) => {
  const { product, category, quantity } = req.body;

  // Just echoing back the data for now
  res.status(201).json({
    message: 'Inventory registered successfully!',
    inventory: { product, category, quantity }
  });
});
       
console.log("Inventory Service is running...");
