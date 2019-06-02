import React from 'react';
import {NavLink} from "react-router-dom";
import style from './SignInLinks.module.css'
import {connect} from "react-redux";
import {signOut} from '../store/actions/authActions'

const SignInLinks =(props) => {
        return(
            <div>
                <ul className={style.linkContainer}>
                    <li className={style.linkItem}>
                        <NavLink className={style.signLinkItem} to='/createproject' activeClassName={style.active}>New Record</NavLink>
                    </li>
                    <li className={style.linkItem}>
                        <a className={style.signLinkItem} to='/' onClick={props.signOut} >Log Out</a>
                    </li>
                    <li className={style.linkItem}>
                        <NavLink className={style.signLinkAva} to='/'>{props.profile.initial}</NavLink>
                    </li>
                </ul>
            </div>
        )
    };

const mapDispatchToProps =  (dispatch) => {
    return{
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps)(SignInLinks)