import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom';

import './Assets/css/default.min.css';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Products from './components/pages/products';
import SignIn from './components/pages/signInForm';
import SignupForm from './components/pages/signUpForm';
import ProfilePage from './components/pages/profilePage';
import ModalAuth from './components/pages/modalAuth';
import ModalAuthSignUp from "./components/pages/modalAuthSignUp";

class App extends Component {
    render() {
    return (
        <Router>
    <div className="App">
        <Header/>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/Products' component={Products} />
        <Route exact path='/SignIn' component={SignIn} />
        <Route exact path='/SignUp' component={SignupForm}/>
        <Route exact path='/ProfilePage' component={ProfilePage}/>
        <Route exact path='/ModalAuthSignUp' component={ModalAuthSignUp}/>
        <Route exact path='/ModalAuth' component={ModalAuth}/>
        <Footer/>

    </div>
        </Router>
    );
  }
}



export default App;
