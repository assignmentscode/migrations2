module.exports = [
  {
    path: '/ping',
    method: 'GET',
    handler: (request, h) => 'pong',
  },
  {
    path: '/users',
    method: 'GET',
    handler: (request, h) => 'Displaying the list of all users',
  },
  {
    path: '/user/{id}',
    method: 'GET',
    handler: (request, h) => `Displaying the details of user with userid ${request.params.id}`,
  },
  {
    path: '/user',
    method: 'POST',
    handler: (request, h) => 'Creating new user',
  },
  {
    path: '/user/{id}',
    method: 'PUT',
    handler: (request, h) => `Updating the user details for user ${request.params.id} via PUT request`,
  },
  {
    path: '/user/{id}',
    method: 'DELETE',
    handler: (request, h) => `Deleting the user details for user ${request.params.id} via DELETE request`,
  },
];
