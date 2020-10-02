import React, { useEffect, useState } from 'react'
import socketIOClient from 'socket.io-client'
import './Home.css'
import TweetModel from '../models/TweetModel'
import Tweet from '../components/Tweet'
import { render } from 'react-dom'

function Home(props) {
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

                <div id="div-results" className="results">
                    <h2>Results</h2>
                    {props.tweetList.map((t) => {
                        return <Tweet tweet={t}></Tweet>
                    })}
                </div>
            </div>  
        </div>
    );
}
export default Home;