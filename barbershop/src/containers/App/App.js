import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from 'components/Header';
import Login from 'features/Login';
import Contacts from 'features/Contacts';
import Services from 'features/Services';
import Account from 'features/Account';
import About from 'features/About';
import NotFound from 'features/NotFound';
import { Homepage } from 'features/Homepage';
import Registration from 'features/Registration';
import { setupStoreRequest, logoutRequest } from './actionCreators';



class App extends React.Component {
  componentDidMount() {
    this.props.setupStore()
  }

  render() {
    const { isUserLogged, logOut } = this.props
    return (
      <div>
        <Header isUserLogged={isUserLogged} logOut={logOut} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/homepage' component={Homepage} />
          <Route path='/about' component={About} />
          <Route path='/login' component={Login} />
          <Route path='/registration' component={Registration} />
          <Route path='/services' component={Services} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/account' component={Account} />
          <Route component={NotFound} />

        </Switch>
      </div>

    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setupStore: () =>
      dispatch(setupStoreRequest()),
    logOut: () => dispatch(logoutRequest())
  }
}

const mapStateToProps = (state) => ({ isUserLogged: state.app.currentUser.login })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)