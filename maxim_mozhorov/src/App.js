import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import axios from "axios";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import User from './components/user/User';
import AboutPage from './components/about/AboutPage';
import NoMatch from  './components/404/NoMatch';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component{
    constructor(props){
        super(props);
        axios.post('/user',{})
            .then( (response) =>{
                if ( response.data !== "failure" ){
                    this.props.profile.isGuest = false;
                    this.props.profile.username = response.data.username;
                    this.props.profile.email = response.data.email;
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/user" component={User} />
                        <Route path="/about" component={AboutPage} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
                <Footer/>
            </div>
        );
    }
}



const mapStateToProps = function(state) {
    return {
        profile: state.user
    }
};

export default connect(mapStateToProps)(App);

