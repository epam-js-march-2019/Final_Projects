import React from "react";

import { Redirect } from 'react-router'


function Post ( {data} ) {
    const postStyle = {
        margin: 20,
        padding:20,
        width:"70%"
    };
    
    if (!data){
        return <Redirect to="/"/>
    }
    return (
        <div>
            <article style={postStyle}>
                <h2>{data.title || "default title"}</h2>
                <h3>{data.date || Date()}</h3>
                <p>оценка:{data.score}</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis nostrum molestias impedit, voluptate amet obcaecati ipsam incidunt cupiditate asperiores?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minima architecto, obcaecati, aut consequuntur impedit quidem est possimus et, exercitationem dolorum magni dolore. Consequatur aperiam saepe ratione odio cum quis facilis quidem unde sequi nemo officia earum, repellat tempora et suscipit magni? Sed at assumenda perspiciatis sapiente facere, ea nostrum eligendi cumque ut corrupti ipsum molestias. Nemo, deserunt veritatis culpa rem sed architecto deleniti ad distinctio doloremque minus ipsum explicabo quasi blanditiis sunt ea neque maiores qui, molestias molestiae rerum! Eveniet eaque ratione, beatae odit minus perferendis accusantium blanditiis corporis sed, error delectus, quae ex laudantium ea amet quo tempora.
                </p>
            </article>
        </div>
    );
}


export default Post;