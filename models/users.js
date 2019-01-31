module.exports = (sequelize, DataTypes) => {
  const libraryUsers = sequelize.define('libraryUsers', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nameOfBookBorrowed: DataTypes.STRING,
    borrowedBook: {
      type: DataTypes.BOOLEAN,
    },
    totalBooksBorrowed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  libraryUsers.displayAll = () => libraryUsers.findAll();
  libraryUsers.insert = (inputFirstName, inputLastname = ' ', inputUsername) => {
    libraryUsers.create({
      firstname: inputFirstName,
      lastname: inputLastname,
      username: inputUsername,
      totalBooksBorrowed: 0,
    });
  };

  return libraryUsers;
};
