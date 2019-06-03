import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomeHeader from './component/header/HomeHeader'
import DashboardHeader from './component/header/DashboardHeader'
import HomeContentPage from './component/contentPage/HomeContentPage'
import DashboardContentPage from './component/contentPage/DashboardContentPage'

class App extends React.Component {

    constructor(props) {
        super(props);
    }

        updatePageSize(pageSize) {
            if (pageSize !== this.state.pageSize) {
                this.loadFromServer(pageSize);
            }
        }

        render()
        {
            return (
                <Router>
                    <Switch>
                        <Route exact path="/" component={HomeHeader}/>
                        <Route path="/dashboard" component={DashboardHeader}/>
                    </Switch>
                    <Switch>
                        <Route exact path="/" component={HomeContentPage}/>
                        <Route path="/dashboard" component={DashboardContentPage}/>
                    </Switch>
                </Router>
            )
        }
    }

render(<App/>, document.getElementById('react'));