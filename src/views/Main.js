import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';

import LandingPage from './LandingPage';
import PriceList from './PriceList';
import Profile from './Profile';
import SignUpForm from './SignUp';

class Main extends Component {
  constructor () {
    super();
    this.state = {
    isLoggedIn: false,
    appointmentList: ''
    }
  }

  render () {
     return (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/services" component={PriceList} />
    <Route path="/profile" component={Profile} />
    <Route path="/sign-up" component={SignUpForm} />
  </Switch>
     )};
}

export default Main;