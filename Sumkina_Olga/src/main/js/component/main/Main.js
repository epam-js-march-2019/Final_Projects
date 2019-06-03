import React from 'react';
// import styled from "styled-components";
import {Switch, Route, withRouter} from 'react-router-dom'
import ServiceList from '../service/ServiceList.js'
import Profile from '../profile/Profile.js'
import ArchiveService from '../service/ArchiveService.js'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

function Main() {
    return (

        <section>
            <Switch>
                <Route path="/profile" component={Profile}/>
                <Route path="/service" component={ServiceList}/>
                <Route path="/archive" component={ArchiveService}/>
            </Switch>
        </section>

    )
}

export default Main;