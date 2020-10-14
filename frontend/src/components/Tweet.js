import React from 'react'
import TweetModel from '../models/TweetModel'
import './Tweet.css'

function Tweet(props) {
    //pre: props is a tweet model
    return (
        <div className="tweet-root">
            <div>
                <img src={props.tweet.imgUrl}/>
            </div>
            <div>
                <div className="tweet-userinfo">
                    <p className="tweet-username">{props.tweet.username}</p>
                    <p className="tweet-usertag">@{props.tweet.usertag}</p>
                </div>
                <p className="tweet-message">{props.tweet.message}</p>
                <p className="tweet-datetime">{props.tweet.datetime}</p>
            </div>
        </div>
    )
}
export default Tweet