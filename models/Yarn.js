const { Model, Datatypes, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Yarn extends Model { }

Yarn.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        company: {
            type: DataTypes.STRING,
            allowNull: true
        },

        brand: {
            type: DataTypes.STRING,
            allowNull: true
        },

        colorway: {
            type: DataTypes.STRING,
            allowNull: true
        },

        yardage: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        grams: {
            type: DataTypes.INTEGER,
            allowNull: true
        },

        skeins: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        dye_lot: {
            type: DataTypes.INTEGER,
            allowNull: true
        },

        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
        }
    },

    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'yarn',
    }
);

module.exports = Yarn;