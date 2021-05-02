// import models
const User = require('./User');
const Yarn = require('./Yarn');
const Profile = require('./Profile')

Yarn.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Yarn, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasOne(Profile, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Profile.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {
    User,
    Yarn,
    Profile
};