import React from 'react';
import './App.css';
import Header from '../components/header/Header'
import Catalog from "../components/catalog/Catalog";
import ModalAuth from "../components/modalAuth/ModalAuth";
import NavigationBar from "../components/navigationBar/navigationBar";
import About from "../components/about/About";
import Profile from '../components/profile/Profile'
import { Route, Switch, Redirect } from "react-router-dom";
import {User} from '../constants/user'

class App extends React.Component{
  constructor(props){
    super(props);
    this.user = new User();
    this.modalAuthRef = React.createRef();
    this.profileRef = React.createRef();
    if(localStorage.getItem('data')){
        if(localStorage.getItem('data').currentUser !== null) {
            this.state = JSON.parse(localStorage.getItem('data'));
        }
    }
  }

    state = {
      currentUser: null,
      authUser: null,
      authPassword: null,
      authPasswordConfirm: null,
      showRegistration: false,
      showAuth: false,
  };

  manageModalAuth = () => {
      this.setState({
          showAuth: true,
          showRegistration: false
          });
  };

  manageModalRegistration = () => {
      this.setState({
          showRegistration: true,
          showAuth: false
      });
  };

  registration = (login, password)=>{
      login = this.modalAuthRef.current.state.login;
      password = this.modalAuthRef.current.state.password;
      if(localStorage.getItem(login)){
          this.modalAuthRef.current.setState({errorMessage: 'User with that login already exists'});
      } else {
          this.user = new User();
          this.user.login = login;
          this.user.password = password;
          localStorage.setItem(login, JSON.stringify(this.user));
          this.user = null;
          console.log('Successfully registrated user ' + login + ' with password ' + password + ' !');
          this.setState({
              showRegistration: false,
              showAuth: false
          });
          this.modalAuthRef.current.setState({errorMessage: ''});
          alert('Successful registration!');
      }
  };

  auth = (login, password) => {
    if(!localStorage.getItem(login)){
        this.modalAuthRef.current.setState({
            errorMessage: 'No user with that login',
            login: '',
            password: ''
        });

    } else{
        if(!(JSON.parse(localStorage.getItem(login)).password === password)){
            this.modalAuthRef.current.setState({
                errorMessage: 'Wrong password',
                login: '',
                password: '',
            });
            console.log('Wrong password');
        } else{
            console.log('Successful login');
            this.user = JSON.parse(localStorage.getItem(login));
            this.setState({
                currentUser: login,
                showRegistration: false,
                showAuth: false
            }, () => {localStorage.setItem('data', JSON.stringify(this.state))});
        }
    }
  };

    logout = () => {
        this.setState({currentUser: null});
        this.modalAuthRef.current.setState({
            login: null,
            password: null,
            confirmPassword: null
        });
        this.user = null;
        for(let prop in this.state){
            this.state[prop] = null;
        }
        localStorage.setItem('data',JSON.stringify(this.state));
    };

  manageModalClose = (e) => {
      this.modalAuthRef.current.setState({
          errorMessage: '',
          login: '',
          password: '',
          passwordConfirm: ''
      });
      this.setState({
          showAuth: false,
          showRegistration: false
      });

  };

  manageOrder = (item) => {
      let tmpUser = JSON.parse(localStorage.getItem(this.state.currentUser));
      tmpUser.orders.push(item);
      localStorage.setItem(this.state.currentUser, JSON.stringify(tmpUser));
  };

  render(){
      return (
          <React.Fragment>
              <div className='backgroundContainer'>
                  <article className='mainWindow'>
                          <Header />
                          <ModalAuth
                              ref = {this.modalAuthRef}
                              showAuth = {this.state.showAuth}
                              showRegistration = {this.state.showRegistration}
                              auth = {this.auth}
                              registration = {this.registration}
                              onClose = {this.manageModalClose}
                          />
                          <NavigationBar
                              auth = {this.manageModalAuth}
                              registration = {this.manageModalRegistration}
                              user = {this.state.currentUser}
                              logout = {this.logout}
                          />
                      <article className='content'>
                          <Switch>
                          <Route
                              exact path='/About'
                              component={About}
                          />
                          <Route
                              path ='/Catalog'
                              render={(props) => <Catalog
                                  {...props}
                                  order={this.manageOrder}
                                  user={this.state.currentUser}
                          />}/>
                          <Route
                              path='/Profile'
                              className={'Profile'}
                              ref={this.profileRef}
                              render={(props)=><Profile
                                  {...props}
                                  user={this.state.currentUser}
                                  ref={this.profileRef}
                                  auth={this.manageModalAuth}
                              />}
                          />
                          <Route component={About}/>
                          </Switch>
                      </article>
                  </article>
              </div>
          </React.Fragment>
      );
  }
}

export default App;
