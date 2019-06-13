import React from 'react'
import MainPage from './MainPage'
import NotFound from './NotFound'

import PrivateRoute from '../containers/PrivateRoute'
import {WithLayoutTrekkingArticle, WithLayoutSignIn, WithLayoutLogin, WithLayoutProfile} from '../containers/WithLayoutComponent'

import {Route, Switch} from "react-router-dom";


function App () {

    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/trekking/:id" component={WithLayoutTrekkingArticle}/>
                <PrivateRoute path="/profile" component={WithLayoutProfile} pathTo={'/login'} condition={(param)=>param}/>
                <Route path="/login" component={WithLayoutLogin}/>
                <PrivateRoute path="/signIn" component={WithLayoutSignIn} pathTo={'/profile'} condition={(param)=>!param}/>
                <Route component={NotFound} />
            </Switch>
        </React.Fragment>
    )
}

export default App