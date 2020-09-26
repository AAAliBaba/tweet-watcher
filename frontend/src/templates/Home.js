import React, { useEffect } from 'react';
import './Home.css';

function Home() {
    useEffect(() => {
    }, []);

    return (
        <div>
            <div className="header">
                <h1 className="header-title">Tweet Watcher</h1>
                <h4 className="header-subtitle">Project by Arafat Arman</h4>
            </div>

            <div className="main-content">
                <div className="user-form">
                    <h2>Search Criteria</h2>
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