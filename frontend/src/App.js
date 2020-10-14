import React, { useState } from 'react';
import './App.css';
import Home from './templates/Home';
import TweetModel from './models/TweetModel';
import TweetList from './components/TweetList'

function App(props) {

  const [tweet_arr, setTweetArr] = useState([])

  props.socketService.SOCKET.on('received-tweet', (arg) => {
    if(arg) {
      let tm = new TweetModel(arg)
      let new_arr = [...tweet_arr]
      new_arr.unshift(tm)
      if(new_arr.length > 10) new_arr.pop()
      setTweetArr(new_arr) 
    }
  });

  return (
    <div>
      <Home socketService={props.socketService}>
        <TweetList tweetList={tweet_arr}/>
      </Home>
    </div>
  );
}

export default App
