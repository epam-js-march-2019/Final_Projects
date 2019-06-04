import React from "react";
import {Redirect} from "react-router-dom"


function Profile( { login, onSignOut } ) {
    const profileStyle={paddingLeft:20};
    function handleClick(e) {
        onSignOut(e.target.click);
    };
    if (login){
        return (
            <div style={profileStyle}>
                <p>welcome back <strong>{login}</strong></p>
                <button onClick={handleClick}>Sign Out</button>
            </div>
        )
    } else return <Redirect to='/'/>
}
export default Profile;