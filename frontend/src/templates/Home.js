import React, { useEffect } from 'react'
import socketIOClient from 'socket.io-client'
import './Home.css'

function Home() {
    const ENDPOINT = 'localhost:9000'

    useEffect(() => {
    }, [])

    const socket = socketIOClient(ENDPOINT)
    socket.on('quicktest', (arg) => {
        console.log(arg)
    })

    return (
        <div>
            <div className="header">
                <h1 className="header-title">Tweet Watcher</h1>
                <h4 className="header-subtitle">Project by Arafat Arman</h4>
            </div>

            <div className="main-content">
                <div className="user-form">
                    <h2>Search Criteria</h2>
                    <button onClick={() => {socket.emit('quicktest', "hello from client")}}>Test Socket</button>
                </div>

                <div className="vert-div"></div>

                <div className="results">
                    <h2>Results</h2>
                </div>
            </div>  
        </div>
    );
}
export default Home;