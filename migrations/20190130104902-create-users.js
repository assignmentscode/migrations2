module.exports = {
  up: (queryInterface, Sequelize) => { 
    return queryInterface.createTable('libraryUsers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      firstname: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      lastname: {
        type: Sequelize.STRING,
      },
      username: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      nameOfBookBorrowed: {
        type: Sequelize.STRING,
      },
      borrowedBook: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      totalBooksBorrowed: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};