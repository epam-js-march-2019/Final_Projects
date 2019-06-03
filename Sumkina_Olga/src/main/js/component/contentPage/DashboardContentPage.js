import React from 'react'
import {Switch, Route} from 'react-router-dom'
import DashboardNavigation from '../Navigation/DashboardNavigation.js'
import Profile from "../profile/Profile";
import ServiceList from "../service/ServiceList";
import ArchiveService from "../service/ArchiveService";


export default class DashboardContentPage extends React.Component {
    render(){
        return(
            <div>
                <DashboardNavigation />
                <section>
                    <Switch>
                        <Route path="/dashboard/profile" component={Profile}/>
                        <Route path="/dashboard/service" component={ServiceList}/>
                        <Route path="/dashboard/archive" component={ArchiveService}/>
                    </Switch>
                </section>
            </div>
        )
    }

}