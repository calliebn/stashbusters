const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    // define an id column
    id: {
      // use the special Sequelize DataTypes object provide what type of data it is
      type: DataTypes.INTEGER,

      // equivalent of SQL "NOT NULL"
      allowNull: false,

      // instruct that this is the Primary Key
      primaryKey: true,

      // turn on auto increment
      autoIncrement: true,
    },

    //define Username column
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    //define password
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      // password must be at least five characters long
      validate: {
        len: [5],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },

      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
    //imported sequelize connection (the direct connection to database)
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

<<<<<<< HEAD
module.exports = User;
=======
module.exports = User;
>>>>>>> db06ecf7d3caa52aecf967535c9c56a84b8f8b78
