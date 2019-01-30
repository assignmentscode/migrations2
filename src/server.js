const Hapi = require('hapi');
const routes = require('./routes/index');

const server = Hapi.server({
  host: 'localhost',
  port: 8080,
});

// Add the route
server.route(routes);

// Start the server
const start = async () => {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
};

module.exports = { server, start };
