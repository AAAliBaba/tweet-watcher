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

io.on('connection', socket => {
  console.log('User connected')
  
  /*
    code here that changes what to track and untrack
  */
  tweet_stream.track('aaalibabatest')
  tweet_stream.on('tweet', tweet => {
    socket.emit('quicktest', tweet)
  })

  socket.on('quicktest', (res) => {
    console.log(res)
    io.sockets.emit('quicktest', "hello from server")
  })

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