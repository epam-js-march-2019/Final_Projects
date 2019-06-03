import React, {Component} from 'react';
import ModalForm from '../../Components/ModalForm/ModalForm.js';
import './TopBar.css';

export default class TopBar extends Component {
    updateData = (value) => {
        this.setState({
            name: value
        })
    }
    singOut = () => {
        localStorage.setItem('currentUser', "0");
        this.setState({
            name: 0
        })
    }

    render() {
            let Profile;
            let SignIn;
            let SignOut;
            const curUser = localStorage.getItem('currentUser');
            if (curUser === "0") {
                SignIn = <ModalForm updateData = {this.updateData} nameForm = "Auth"/>
            }
            if (curUser !== "0") {
                Profile = < a href = "/Profile" className = "YourProfile" > Your profile < /a>; 
                SignOut = < a className="SignOut" onClick={ this.singOut }> Sign Out </a> ;
            }
            return ( < div className="TopBar">
                    < header className="TopBar_header">
                        < a href="/">
                            < img alt="logo " src="./logo.png" className="TopBar_header_logo">
                                < /img> </a>
                                    < div className="TopBar_header_button">
                                        < /div> { SignIn } { Profile } { SignOut } < /header>
                            < /div>
                             ) 
                           } }