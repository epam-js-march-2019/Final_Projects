import React from "react";
import ContentCard from "./ContentCard";
import { Link } from "react-router-dom";

function Feed(props) {
  const topStyle = {
    float: "right", 
    width:"25%",
    border:"1px solid black",
    borderRadius: "10px",
    margin: 20,
    padding: 20,
    position: "fixed",
    right:20,
  
  };

  const data = props.data;
  const posts = data.map(
    ({title, date, content, id, score}) => (
      <ContentCard 
        key={title + id + date}
        title={title} 
        date={date} 
        content={content}
        id={id}
        score={score}
        changeScore={props.changeScore}
        isLoggedIn={props.isLoggedIn}/>
    )
  );
  const top = 
    data.slice().sort((p1,p2)=>(p2.score-p1.score))
        .slice(0,3)
        .map(( {title, score, id} )=>(
        <li>
          <Link to={`/${id}-${title.replace(/\s/g, "-")}`}>{title} (<em>{score}</em>)</Link>
        </li>));

  return (
    <div>
      <div style={topStyle}>
          <h3>top posts</h3>
          <ul>
            {top}
          </ul>
      </div>
      <div>{posts}</div>
    </div>
  );
}
      
export default Feed;