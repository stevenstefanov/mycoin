const sequelize = require('../config/connection');
const { User, Coin } = require('../models');

const userData = require('./userData.json');
const coinData = require('./coinData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const coin of coinData) {
    await Coin.create({
      ...coin,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();