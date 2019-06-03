import React from 'react'
import MainMenu from '../MainMenu'

import "./style.css"

function MainHeader () {
    return (
        <header className={"main-header"}>
            <MainMenu/>
            <h1 className={"main-header__title"}>Open a new world</h1>
        </header>
    )
}

export default  MainHeader