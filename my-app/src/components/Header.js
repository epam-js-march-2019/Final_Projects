import React from "react";
import {Link} from "react-router-dom";

function Header(props) {
    const listStyle = {
        listStyleType: "none"
    }
    const headerStyle={
        paddingLeft:20
    };
    return (
        <header>
            <h1 style={headerStyle}><Link to="/">my retarded blog</Link></h1>
            <ul style={listStyle}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    {props.isLoggedIn?
                        <Link to='/profile'>{props.login}</Link>:
                        <Link to="/authorize">Login</Link>
                    }
                </li>
            </ul>
        </header>
    );
}

export default Header;