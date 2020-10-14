import React from 'react'
import Tweet from './Tweet'

function TweetList(props) {
    return (
        <div>
            {props.tweetList.map((t) => { return (<div key={t.id}><Tweet tweet={t}/></div>) })}
        </div>
    )
}

export default TweetList