// index.js
console.log("Notification Service is running...");
// auth-service/index.js
const express = require('express');
const app = express();
const PORT = 3007;
process.on('uncaughtException', console.error);
app.use(express.json());
app.get('/api/notification/health', (req, res) => res.send('Notification Service running!'));

app.listen(PORT, () => {
  console.log(`Notification Service listening on port ${PORT}`);
});

app.post('/api/notification/register', (req, res) => {
  const { username, email, telephone } = req.body;

  // Just echoing back the data for now
  res.status(201).json({
    message: 'Notification registered successfully!',
    user: { username, email, telephone }
  });
});
