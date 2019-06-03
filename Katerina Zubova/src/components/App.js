import React from 'react'
import MainPage from './MainPage'
import NotFound from './NotFound'
import TrekkingArticle from "../containers/TrekkingArticle";
import Profile from "../containers/Profile";
import Login from "../containers/Login";
import SignIn from "../components/SignIn";

import MainMenu from '../components/MainMenu'

import PrivateRoute from '../containers/PrivateRoute'

import {Route, Switch} from "react-router-dom";


function App () {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <React.Fragment>
                    <MainMenu/>
                    <Route path="/trekking/:id" component={TrekkingArticle} />
                    <PrivateRoute path="/profile" component={Profile} pathTo={'/login'} condition={(param)=>param}/>
                    <Route path="/login" component={Login}/>
                    <PrivateRoute path="/signIn" component={SignIn} pathTo={'/profile'} condition={(param)=>!param}/>
                </React.Fragment>
                <Route component={NotFound} />
            </Switch>
        </React.Fragment>
    )
}

export default App