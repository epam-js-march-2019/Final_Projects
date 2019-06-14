import React from 'react'
import {Switch, Route} from 'react-router-dom'
import DashboardNavigation from '../Navigation/DashboardNavigation.js'
import Profile from "../profile/Profile";
import ServiceList from "../service/ServiceList";
import EmployeeDashboardScreen from "../employee/EmployeeDashboardScreen";

import client from '../../client'
import follow from '../../follow'

const root = '/api';

export default class DashboardContentPage extends React.Component {


    render(){
        return(
            <div>
                <DashboardNavigation />
                <section>
                    <Switch>
                        <Route path="/dashboard/profile" component={Profile}/>
                        <Route path="/dashboard/service" component={ServiceList}/>
                        <Route path="/dashboard/employee" component={EmployeeDashboardScreen}/>
                    </Switch>
                </section>
            </div>
        )
    }

}