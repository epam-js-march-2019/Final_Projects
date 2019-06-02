import React from 'react';
import {NavLink} from "react-router-dom";
import style from './SignOutLinks.module.css'


const SignOutLinks =() => {

        return(
            <ul className={style.signContainer}>
                <li className={style.linkItem}>
                    <NavLink className={style.signLinkItem} to='/signup'>Sign Up</NavLink>
                </li>
                <li className={style.linkItem}>
                    <NavLink className={style.signLinkItem} to='/signin'>Log In</NavLink>
                </li>
            </ul>
        )
    };


export default SignOutLinks