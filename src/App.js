import React from 'react';
import './App.css';
import SignIn from "./auth/SignIn";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./header/Header";
import Nav from "./nav/nav";
import Dashboard from "./dashboard/Dashboard";
import ProjectDetails from "./projects/ProjectDetails";
import SignUp from "./auth/SignUp";
import CreateProject from "./projects/CreateProject";
import Blocks from "./blocks/Blocks";
import Footer from "./footer/Footer";
import About from "./about/About";
import Contacts from "./contacts/Contacts";
import Services from "./services/Services";


function App() {
  return (
      <div>
          <BrowserRouter>
                <Header/>
                <Nav/>
              <Switch>
                  <Route exact path='/' component = {Dashboard} />
                  <Route path='/project/:id' component = {ProjectDetails} />
                  <Route path='/signin' component = {SignIn} />
                  <Route path='/signup' component = {SignUp} />
                  <Route path='/createproject' component = {CreateProject} />
              </Switch>
              <Services/>
              <Blocks/>
              <About/>
              <Contacts/>
              <Footer/>
          </BrowserRouter>
      </div>
  );
}

export default App;
