import React from 'react';
import style from './Header.module.css'
import logo from '../assets/images/logo.png'
let Header = () => {
    return(
        <div className={style.headerContainer}>
            <img className={style.logo} src={logo} alt=""/>
        </div>
    )
};
export default Header;