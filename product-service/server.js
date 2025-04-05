const jsonServer = require('json-server');
console.log(jsonServer); // Add this to ensure json-server is imported properly

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Custom route: Prefix the API with /api
server.use('/api', router);

server.listen(5000, () => {
  console.log('JSON Server is running at http://localhost:5000');
});
