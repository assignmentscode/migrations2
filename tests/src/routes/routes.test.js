const { server, start } = require('../../../src/server');

describe('server () :', () => {
  const optionsGet = {
    method: 'GET',
    url: '/',
  };
  it('should return status 404 on route "/”', async () => {
    const temp = await server.inject(optionsGet);
    expect(temp.statusCode).toEqual(404);
  });
  it('should return message “Not Found” on route "/"', async () => {
    const temp = await server.inject(optionsGet);
    expect(temp.statusMessage).toEqual('Not Found');
  });
  const optionsGet1 = {
    method: 'GET',
    url: '/ping',
  };
  it('should return status code "200" for route /ping', async () => {
    const temp = await server.inject(optionsGet1);
    expect(temp.statusCode).toEqual(200);
  });
  it('should return message "hello world" on route /ping', async () => {
    const temp = await server.inject(optionsGet1);
    expect(temp.payload).toEqual('pong');
  });
  const optionsGet2 = {
    method: 'GET',
    url: '/users',
  };
  const getOutput2 = 'Displaying the list of all users';
  it('should return status code "200" for route /users', async () => {
    const temp = await server.inject(optionsGet2);
    expect(temp.statusCode).toEqual(200);
  });
  it('should return message "hello world" on route /ping', async () => {
    const temp = await server.inject(optionsGet2);
    expect(temp.payload).toEqual(getOutput2);
  });
  const optionsGet3 = {
    method: 'GET',
    url: '/user/shashwat2702',
  };
  const getOutput3 = 'Displaying the details of user with userid shashwat2702';
  it('should return status code "200" for route /user/shashwat2702', async () => {
    const temp = await server.inject(optionsGet3);
    console.log(temp.result);
    expect(temp.statusCode).toEqual(200);
  });
  it('should return message "hello world" on route /ping', async () => {
    const temp = await server.inject(optionsGet3);
    expect(temp.payload).toEqual(getOutput3);
  });
  const optionsPost = {
    method: 'POST',
    url: '/',
  };
  it('should return status code "404" for "/" route of POST method', async () => {
    const temp = await server.inject(optionsPost);
    expect(temp.statusCode).toEqual(404);
  });
  it('should return status message "Not Found" on route /', async () => {
    const temp = await server.inject(optionsPost);
    expect(temp.statusMessage).toEqual('Not Found');
  });
  const optionsPut = {
    method: 'PUT',
    url: '/user/shashwat2702',
  };
  const putOutput3 = 'Updating the user details for user shashwat2702 via PUT request';
  it('should return status code "200" for route of PUT method at route /user/shashwat2702', async () => {
    const temp = await server.inject(optionsPut);
    expect(temp.statusCode).toEqual(200);
  });
  it('should return message "Updating message for shashwat2702" on route /user/shashwat2702', async () => {
    const temp = await server.inject(optionsPut);
    expect(temp.payload).toEqual(putOutput3);
  });
  const optionsDelete = {
    method: 'DELETE',
    url: '/user/shashwat2702',
  };
  const deleteOutput3 = 'Deleting the user details for user shashwat2702 via DELETE request';
  it('should return status code "200" for route of DELETE method at /user/shashwat2702', async () => {
    const temp = await server.inject(optionsDelete);
    expect(temp.statusCode).toEqual(200);
  });
  it('should return message "Delete message for shashwat2702" on route /user/shashwat2702', async () => {
    const temp = await server.inject(optionsDelete);
    expect(temp.payload).toEqual(deleteOutput3);
  });
});
