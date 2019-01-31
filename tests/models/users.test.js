const models = require('./../../models');

describe('libraryUsers.displayAll: ', () => {
  beforeAll(async () => {
    await models.libraryUsers.truncate();
  });
  it('should display list of all the users existing in the database', async () => {
    await models.libraryUsers.insert('Shashwat', 'Sinha', 'shashwat2702');
    expect(await models.libraryUsers.count()).toEqual(1);
  });
});
