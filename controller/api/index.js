const Twitter = require('twitter');
require('dotenv').config();

const apiKey = process.env.apiKey
const apiSecretKey = process.env.apiKeySecret
const accessToken = process.env.accessToken
const accessTokenSecret = process.env.accessTokenSecret

var client = new Twitter({
  consumer_key: apiKey,
  consumer_secret: apiSecretKey,
  access_token_key: accessToken,
  acccess_token_secret: accessTokenSecret
});

_ = require('lodash')
const isTweet = _.conforms({
  contributors: _.isObject,
  id_str: _.isString,
  text: _.isString,
})

const router = require('express').Router();
const userRoutes = require('./userRoutes');
const topicRoutes = require('./topicRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/topics', topicRoutes);
router.use('/comments', commentRoutes);

module.exports = router;

