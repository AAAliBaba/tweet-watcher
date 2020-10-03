import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './templates/Home';
import socketIOClient from 'socket.io-client';
import TweetModel from './models/TweetModel';

function App() {
  const ENDPOINT = 'localhost:9000';

  const [tweet_arr, setTweetArr] = useState([]);

  // const socket = socketIOClient(ENDPOINT);
  // socket.on('quicktest', (arg) => {
  //     let tm = new TweetModel(arg);
  //     console.log(tm)
  //     let new_arr = [...tweet_arr];
  //     new_arr.push(tm);
  //     setTweetArr(new_arr)
  // });

  return (
    <div>
      <Home tweetList={tweet_arr}/>
    </div>
  );
}

export default App;
