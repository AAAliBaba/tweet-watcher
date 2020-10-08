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

    const t2 = new TweetModel(
        "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
        "AAAliBaba",
        "aaalibaba616",
        "this is another test tweet message",
        "Sat Oct 03 00:04:31 +0000 2020"
    )

    const [words, setWords] = useState([]);
    const [input, setInput] = useState("");
    let displayWords = [];

    useEffect(() => {
        console.log(words);
        //logic that updates the word list will go here
        displayWords = words.map((word) => {
            return (
            <div className="word">
                {word}
                <button className="remove-btn">x</button>
            </div>)
        });
    }, [words])

    let updateWords = async (word) => {
        let newArr = [...words];
        newArr.push(word);
        setWords(newArr);
    }

    let onTrackClicked = () => {
        setInput(""); //clear input
        updateWords(input);
    }

    return (
        <div>
            <div className="header">
                <h1 className="header-title">Tweet Watcher</h1>
                <h4 className="header-subtitle">Project by Arafat Arman</h4>
            </div>

            <div className="main-content">
                <div className="user-form">
                    <div className="list">
                        <h2 className="title">Keywords</h2>
                        <p className="title">Type keywords (separated by a space) that you want to track!</p>
                        <div className="form">
                            <input className="track-input" type="text" value={input} onChange={event => setInput(event.target.value)}></input>
                            <button className="track-btn" onClick={onTrackClicked}>Track</button>
                        </div>

                        <div className="tracked-words">
                            {words.map((word) => {
                                return (<div className="word">
                                {word}
                                <button className="remove-btn">x</button>
                            </div>)
                            })}
                        </div>
                    </div>
                    {/* <button onClick={() => {socket.emit('quicktest', "hello from client")}}>Test Socket</button> */}
                </div>

                <div className="vert-div"></div>

                <div className="results">
                    <div className="list">
                        <h2 className="title">Results</h2>
                        <div className="tweet"><Tweet tweet={t}/></div>
                        <div className="tweet"><Tweet tweet={t2}/></div>
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