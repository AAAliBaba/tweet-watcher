//use .env file
const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const Twitter = require('node-tweet-stream')

const app = express()
const server = http.createServer(app)

const io = socketIO(server)

var tweet_stream = new Twitter({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_SECRET,
  token: process.env.TOKEN,
  token_secret: process.env.TOKEN_SECRET
})

var all_tweets = []

io.on('connection', socket => {
  console.log('User connected')
  
  //track tweet
  socket.on('track-tweet', res => {
    tweet_stream.track(res)
  })

  //untrack tweet
  socket.on('untrack-tweet', res => {
    tweet_stream.untrack(res)
  })

  // tweet_stream.track('aaalibabatest');

  //send client tweet when it gets registered in the tweet stream
  tweet_stream.on('tweet', tweet => {
    all_tweets.push(tweet)
  })

  setInterval(() => {
    socket.emit('received-tweet', all_tweets.shift())
  }, 2000)

  // socket.on('quicktest', (res) => {
  //   console.log(res)
  //   io.sockets.emit('quicktest', "hello from server")
  // })

  socket.on('disconnect', () => {
    console.log('User disconnected...')
  })
})

app.use('/', (req, res) => {
  res.send("Tweet-Watcher Server")
})

server.listen(9000, () => {
  console.log("Listening on port 9000...")
})