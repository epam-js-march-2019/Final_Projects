import React, { Component } from 'react';
import BookAppointments from './BookAppointments';
import SignInForm from './SignIn';

class Profile extends Component {

    constructor(props) {
       super(props);
       this.state = {        
        isLoggedIn: false
       };      
    }

    componentDidMount() {
        this.checkAuth()
      };

    checkAuth = () =>{
        let isLoggedIn = localStorage.getItem('isLoggedIn');
        this.setState({isLoggedIn: isLoggedIn});
      };
       
    render () {
        const isLoggedIn = this.state.isLoggedIn;
        let content;
        if (isLoggedIn) {
            content = <BookAppointments />
            } else {
            content = <SignInForm />
            }
        return (
            <>
            {content}
            </>
        );
    };
  }
  
  export default Profile;