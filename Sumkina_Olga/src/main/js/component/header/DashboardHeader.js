import React from 'react'
import ReactDOM from 'react-dom'
import {Link, Switch, Route} from "react-router-dom";
import HomeNavigation from '../Navigation/HomeNavigation'
import DashboardNavigation from '../Navigation/DashboardNavigation'

export default class DashboardHeader extends React.Component {
    render() {
        return (
            <header>
                <h1> ENOT <br/> информационная система</h1>
                <div>
                    <Link to="/">Log Out</Link>
                </div>
            </header>
        )
    }
}