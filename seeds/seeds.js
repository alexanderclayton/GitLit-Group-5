const sequelize = require('../config/connection');
const { User, Topic, Comment  } = require('../models');

const userData = require('./userData.json');
const topicData = require('./topicData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const topics = await Topic.bulkCreate(topicData, {
    individualHooks: true,
    returning: true,
  });

  const comments = await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  console.log(users, topics, comments)

  process.exit(0);
}

seedDatabase();