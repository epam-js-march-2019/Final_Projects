import React from 'react'
import ReactDOM from 'react-dom'
import {Link, Switch, Route} from "react-router-dom";
import HomeNavigation from '../Navigation/HomeNavigation'
import DashboardNavigation from '../Navigation/DashboardNavigation'

export default class Header extends React.Component {
    render(){
        return(
            <header>
                <h1>  ENOT <br/> информационная система</h1>
                <div>
                    <Link to="/dashboard">Dashboard</Link>
                    <Switch>
                        <Route exact path='/' component={HomeNavigation}/>
                        <Route path='/dashboard' component={DashboardNavigation}/>
                    </Switch>
                </div>
            </header>
        )
    }
}