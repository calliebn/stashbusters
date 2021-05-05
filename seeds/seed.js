const sequelize = require('../config/connection');
const { User, Yarn, Profile } = require('../models');

const userData = require('./userData.json');
const yarnData = require('./yarnData.json');
const profileData = require('./profileData.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Profile.bulkCreate(profileData);

    await Yarn.bulkCreate(yarnData);

    // for (const yarn of yarnData) {
    //     await Yarn.create({
    //         ...yarn,
    //         user_id: users[Math.floor(Math.random() * users.length)].id,
    //     });
    // }

    process.exit(0);
};

seedDatabase();