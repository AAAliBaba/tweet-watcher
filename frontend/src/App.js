import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './templates/Home';
import socketIOClient from 'socket.io-client';
import TweetModel from './models/TweetModel';
import SocketService from './SocketService';

function App(props) {
  // const ENDPOINT = 'localhost:9000';

  const [tweet_arr, setTweetArr] = useState([])
  // let all_tweets = []

  // const socketService = new SocketService()

  // const socket = socketIOClient(ENDPOINT);
  props.socketService.SOCKET.on('received-tweet', (arg) => {
    // // console.log(tm)
    if(arg) {

    let tm = new TweetModel(arg)
    let new_arr = [...tweet_arr]
    new_arr.push(tm)
    // if(new_arr.length > 3) new_arr.splice(0, 1)
    // // setTimeout(() => {setTweetArr(new_arr)}, 5000)
    setTweetArr(new_arr) }
    // if(all_tweets.length < 10) {
    //   all_tweets.unshift(tm)
    // }
    // console.log(all_tweets)
  });

  // setInterval(() => {
  //   // console.log(all_tweets.splice(0,3))
  //   // let x = all_tweets
  //   // console.log(x.splice(0, 3))
  //   // setTweetArr(all_tweets.splice(0,3))
  //   if(all_tweets.length >= 3)
  //     setTweetArr(all_tweets.splice(0, 3))
  // }, 3000);

  return (
    <div>
      <Home tweetList={tweet_arr} socketService={props.socketService}/>
    </div>
  );
}

export default App
