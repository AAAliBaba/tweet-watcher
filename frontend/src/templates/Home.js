import React, { useEffect, useState } from 'react'
import socketIOClient from 'socket.io-client'
import './Home.css'
import TweetModel from '../models/TweetModel'
import Tweet from '../components/Tweet'
import { render } from 'react-dom'

function Home(props) {
    const t = new TweetModel(
        "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
        "AAAliBaba",
        "aaalibaba616",
        "this is a test tweet message",
        "Sat Oct 03 00:04:31 +0000 2020"
    )

    return (
        <div>
            <div className="header">
                <h1 className="header-title">Tweet Watcher</h1>
                <h4 className="header-subtitle">Project by Arafat Arman</h4>
            </div>

            <div className="main-content">
                <div className="user-form">
                    <h2>Search Criteria</h2>
                    {/* <button onClick={() => {socket.emit('quicktest', "hello from client")}}>Test Socket</button> */}
                </div>

                <div className="vert-div"></div>

                <div className="results">
                    <div className="list">
                        <h2 className="title">Results</h2>
                        <div className="tweet"><Tweet tweet={t}/></div>
                    </div>
                    {/* {props.tweetList.map((t) => {
                        return <Tweet tweet={t}></Tweet>
                    })} */}
                </div>
            </div>  
        </div>
    );
}
export default Home;