const Twitter = ('twitter');
require('dotenv/config');

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

client.stream('statuses/filter', {track: 'TV Shows'}, function(stream) {
  stream.on('data', function(event) {
    console.log(event && event.text);
  });

  stream.on('error', function(error) {
    throw error;
  });
});

_ = require('lodash')
const isTweet = _.conforms({
  contributors: _.isObject,
  id_str: _.isString,
  text: _.isString,
})