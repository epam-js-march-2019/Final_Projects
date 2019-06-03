import React from 'react'
import ReactDOM from 'react-dom'
import {Link, Switch, Route} from "react-router-dom";
import HomeNavigation from '../Navigation/HomeNavigation'
import DashboardNavigation from '../Navigation/DashboardNavigation'

export default class HomeHeader extends React.Component {
    render() {
        return (
            <header>
                <h1> ENOT <br/> информационная система</h1>
                <div>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/sign-in">Sign in</Link>
                    <Link to="/sign-up">Sign up</Link>

                    <Route path='/dashboard' component={DashboardNavigation}/>
                    <Route path='/sign-in' component={DashboardNavigation}/>
                    <Route path='/sign-up' component={DashboardNavigation}/>

                </div>
            </header>
        )
    }
}