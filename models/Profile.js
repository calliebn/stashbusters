const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Profile extends Model { }

Profile.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        username: {
            type: Datatypes.STRING,
            references: {
                model: 'user',
                key: 'username'
            }
        },

        enail: {
            type: Datatypes.STRING,
            references: {
                model: 'user',
                key: "email"
            }
        },

        city: {
            type: Datatypes.STRING,
            allowNull: true,
        },

        craft: {
            type: Datatypes.STRING,
            allowNull: false,
        },

        fav_yarn: {
            type: Datatypes.STRING,
            allowNull: true,
        },

        pets: {
            type: DataTypes.STRING,
            allowNull: true
        }

    },

    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'profile',
    }
);

module.exports = Profile;