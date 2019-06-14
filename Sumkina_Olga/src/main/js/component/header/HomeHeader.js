import React from 'react'
import ReactDOM from 'react-dom'
import {Link, Switch, Route} from "react-router-dom";
import HomeNavigation from '../Navigation/HomeNavigation'
import DashboardNavigation from '../Navigation/DashboardNavigation'
import EmployeeDashboardScreen from '../employee/EmployeeDashboardScreen.js'

export default class HomeHeader extends React.Component {
    render() {
        return (
            <header>
                <h1> ENOT <br/> информационная система</h1>
                <div>
                    <Link to="/dashboard">Dashboard</Link>
                    <Route path='/dashboard' component={DashboardNavigation}/>

                </div>
            </header>
        )
    }
}