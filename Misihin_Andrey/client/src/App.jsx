import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from './history.js';
import './App.css';
import {
  Header,
  Footer,
  MainPage,
  EquipmentPage,
  ExamplePage,
  EquipmentItemPage,
  Modal,
  NoPage,
  Profile,
  PrivateRoute
} from './components';



function App({ modal }) {
  return (
    
    <Router history={history}>
      
        <header className="header">
        <div className="header__wrapper">
          <Header />
        </div>
        </header>
        
        <main className="main">
          <div className="main__wrapper">
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/equipment" component={EquipmentPage} />
              <Route path="/equipment/:slug" component={EquipmentItemPage} />
              <Route path="/gallery" component={ExamplePage} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <Route component={NoPage} />
            </Switch>
          </div>
        </main>
        
        <footer className="footer">
          <div className="footer__wrapper">
            <Footer />
          </div>
        </footer>
        {modal && <Modal />}
      
    </Router>

  );
}

const mapStateToProps = (state) => {
  return {
    modal: state.modal
  }
}

export default connect(mapStateToProps, null)(App);
