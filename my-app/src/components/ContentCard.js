import React from 'react';
import {Link} from 'react-router-dom';

function ContentCard(props) {
    const cardStyle = {
        padding: 20,
        margin: 20,
        width: "60%",
        border: "1px solid black",
        borderRadius:"10px",
        float:"left"
    };
    function onScoreChange(e) {
        props.changeScore(e.target.value, props.id);
    }
    return (
        <div style={cardStyle}>
            <article >
                <Link 
                    to={`/${props.id}-${props.title.replace(/\s/g, "-")}`}>
                    read post
                </Link>
                <h2>{props.title}</h2>
                <h3>{props.date}</h3>
                <p>{props.content}</p>
                <div>
                    <button onClick={onScoreChange} value="-1">-</button>
                    <span>{props.score}</span>
                    <button onClick={onScoreChange} value="1">+</button>
                    {props.isLoggedIn || <p>login to rate posts</p>}
                </div>
            </article>
        </div>
    );
}
ContentCard.defaultProps = {
    date: Date.now(),
    score: 0,
    title: "default title",
    content: "",
    id: (Math.random()*10000000).toFixed()
}
export default ContentCard;