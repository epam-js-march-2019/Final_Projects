import React from 'react'

import {Link} from "react-router-dom";

import "./style.css"

function MainMenu () {
    const data =[{header: "Главная", link: "/"},
        {header: "Личный кабинет" , link: "/profile"},
        {header: "Регистрация", link: "/SignIn"}
    ];
    const list = data.map(item=><li className={"main-menu__item"} key={item.header}><Link to={item.link}>{item.header}</Link></li>);
    return (
        <ul className={"main-menu"}>
            {list}
        </ul>
    )
}

export default  MainMenu