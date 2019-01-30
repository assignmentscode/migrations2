module.exports = [
  {
    path: '/ping',
    method: 'GET',
    handler: (request, h) => 'pong',
  },
];
