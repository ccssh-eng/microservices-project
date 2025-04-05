const axios = require('axios');

axios.post('http://localhost:3002/api/product', {
  name: 'T-shirt',
  price: 29.99,
  category: 'clothing'
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error('Error:', error);
});
