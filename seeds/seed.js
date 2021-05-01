const sequelize = require('../config/connection');
const { User, Yarn } = require('../models');

const userData = require('./userData.json');
const yarnData = require('./yarnData.json');

const seedDatbase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const yarn of yarnData) {
        await Yarn.create({
            ...yarn,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    process.exit(0);
};

seedDatabase();