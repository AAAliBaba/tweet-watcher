import React from 'react'
import TweetModel from '../models/TweetModel'

function Tweet(props) {
    //pre: props is a tweet model
    // console.log(props)
    return (
        <div>
            {/* <p>{props.tweet}</p> */}
            <img src={props.tweet.imgUrl}/>
            <p>{props.tweet.username}</p>
            <p>{props.tweet.usertag}</p>
            <p>{props.tweet.message}</p>
            <p>{props.tweet.datetime}</p>
        </div>
    )
}
export default Tweet