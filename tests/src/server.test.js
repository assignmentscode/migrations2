const { server, start } = require('./../../src/server');

describe('server () :', () => {
  const options = {
    method: 'GET',
    url: '/',
  };
  it('should return status 404 on route "/”', async () => {
    const temp = await server.inject(options);
    expect(temp.statusCode).toEqual(404);
  });
  it('should return message “Not Found” on route "/"', async () => {
    const temp = await server.inject(options);
    expect(temp.statusMessage).toEqual('Not Found');
  });
  const options1 = {
    method: 'GET',
    url: '/hello',
  };
  it('should return status code "200" for route /hello', async () => {
    const temp = await server.inject(options1);
    expect(temp.statusCode).toEqual(200);
  });
  it('should return message "hello world" on route /hello', async () => {
    const temp = await server.inject(options1);
    expect(temp.payload).toEqual('hello world');
  });
  const options2 = {
    method: 'POST',
    url: '/hello',
  };
  it('should return status code "404" for any route of POST method', async () => {
    const temp = await server.inject(options2);
    expect(temp.statusCode).toEqual(404);
  });
  it('should return message "hello world" on route /hello', async () => {
    const temp = await server.inject(options2);
    expect(temp.statusMessage).toEqual('Not Found');
  });
});
