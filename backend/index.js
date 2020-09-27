const dotenv = require('dotenv');
dotenv.config();

var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_SECRET,
  bearer_token: process.env.BEARER
})

const express = require('express');
const app = express();
 
app.use('/search', (req, res) => {
  client.get('search/tweets.json', {q: "aaalibabatest"}, (error, tweets, response) => {
    res.send(response);
  })
});

app.listen(9000);