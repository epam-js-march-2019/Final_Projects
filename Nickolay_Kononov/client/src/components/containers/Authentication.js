import React, { Component} from 'react';
import { connect } from 'react-redux'
import Login from '../presentation/Login';
import Register from '../presentation/Register';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import {logoutUser} from "../../actions/authActions";


class Authentication extends Component {

    constructor(){
        super();

        this.state = {
            toggleReg: false
        };
    }

    componentDidMount(){
    }

    showLogin(){
        this.setState({
            toggleReg: false
        });
    }

    showReg(){
        this.setState({
            toggleReg: true
        });
    }

    logout(){
        this.props.dispatch(logoutUser());
    }

    render(){

        const userNotLoggedIn = (
            <div>
                <Button variant="outline-info" onClick={this.showLogin.bind(this)}>Login</Button><Button variant="outline-warning" onClick={this.showReg.bind(this)}>Register</Button>
                { this.state.toggleReg ? <Register /> : <Login /> }
            </div>
        );
        const userLoggedIn = (<div>Logged in as: <Link to={`/user/profile`}> {this.props.username} </Link>  <Button variant="outline-danger" onClick={this.logout.bind(this)}><a className='no-decor' href={'/'}>Logout</a></Button></div>);

        return (
            <div>
                {this.props.loggedIn ? userLoggedIn : userNotLoggedIn}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn,
        username: state.auth.username,
    }
};

export default connect(mapStateToProps)(Authentication)