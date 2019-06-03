import React from 'react'
import MainHeader from '../components/MainHeader'
import TrekkingCardList from '../containers/TrekkingCardList'
import SearchMenu from "../containers/SearchMenu"



function MainPage () {
    return (
        <React.Fragment>
            <MainHeader/>
            <SearchMenu/>
            <TrekkingCardList/>
        </React.Fragment>
    )
}

export default MainPage