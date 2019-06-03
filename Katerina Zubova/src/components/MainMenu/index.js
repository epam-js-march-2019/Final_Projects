import React from 'react'

import {Link} from "react-router-dom";

import "./style.css"

function MainMenu () {
    return (
        <ul className={"main-menu"}>
            <li className={"main-menu__item"}><Link to="/">Главная</Link></li>
            <li className={"main-menu__item"}><Link to="/profile">Личный кабинет</Link></li>
            <li className={"main-menu__item"}><Link to="/SignIn">Регистрация</Link></li>
        </ul>
    )
}

export default  MainMenu