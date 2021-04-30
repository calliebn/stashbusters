// import models
const User = require('./User');
const Yarn = require('./Yarn');

Yarn.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Yarn, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = {
    User,
    Yarn,
};