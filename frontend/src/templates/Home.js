import React, { useEffect, useState } from 'react'
import './Home.css'

function Home(props) {
    const [words, setWords] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        console.log(words);
    }, [words])

    let onTrackClicked = (input) => {
        setInput(""); //clear input
        addWords(input);
    }

    let addWords = (input) => {
        let newArr = [...words];
        let wordArr = input.split(',');
        for(let i = 0; i < wordArr.length; i++)
        {
            newArr.push(wordArr[i]);
            props.socketService.SOCKET.emit('track-tweet', wordArr[i]);
        }
        setWords(newArr);
    }

    let onUntrackClicked = (i) => {
        let newArr = [...words];
        props.socketService.SOCKET.emit('untrack-tweet', newArr.splice(i, 1)[0])
        setWords(newArr);
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
                        <p className="title">Type keywords or phrases (separated by a comma) that you want to track!</p>
                        <div className="form">
                            <input className="track-input" type="text" value={input} onChange={event => setInput(event.target.value)}></input>
                            <button className="track-btn" onClick={() => onTrackClicked(input)}>Track</button>
                        </div>

                        <div className="tracked-words">
                            {words.map((word, index) => {
                                return (<div className="word" key={index}>
                                {word}
                                <button className="remove-btn" onClick={() => onUntrackClicked(index)}>x</button>
                            </div>)
                            })}
                        </div>
                    </div>
                </div>

                <div className="vert-div"></div>

                <div className="results">
                    <div className="list">
                        <h2 className="title">Results</h2>
                        {props.children}
                    </div>
                </div>
            </div>  
        </div>
    );
}
export default Home;