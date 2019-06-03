import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, isLogedIn}) {
  return(
    <Route render={() => 
      isLogedIn 
      ?
        <Component />
      :
        <Redirect to="/" />
    }/>
  )
}

export default PrivateRoute;