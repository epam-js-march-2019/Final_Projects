import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, pathTo, condition, ...rest }) => {
    return (
        <Route
            {...rest}
                render={props => condition (rest.isAuth) ? (<Component {...props} />) :
                ( <Redirect to={{pathname: pathTo, state: { from: props.location }}}/> )}
        />
    )
}

const mapStateToProps = state => {
    return {
        isAuth: Boolean (state.session.user)
    }
}

export default connect(mapStateToProps)(PrivateRoute)