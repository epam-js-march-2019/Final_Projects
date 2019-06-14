import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import BookAppointments from './BookAppointments';


class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {  
      isLoggedIn: false
    };
  };
  
  render () {
    const isLoggedIn = localStorage.getItem('isLoggedIn'); 
  
    if (isLoggedIn) {
      return (
        <BookAppointments />
      )        
    } else {
    return (
      <Redirect to='/sign-in'/>
    )
    };
  };
};

export default (Profile);