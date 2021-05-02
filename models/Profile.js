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
        },

        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },

        },
    },

    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'profile',
    }
);

module.exports = Profile;