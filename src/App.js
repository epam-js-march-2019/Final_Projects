import React, { Component } from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

import NavBar from './components/NavBar';
import Main from './views/Main';
import Footer from './components/Footer';

class App extends Component {  

  render () {
    return (
      <React.Fragment>
      <ThemeProvider theme={theme}>
      <NavBar/>
      <Main /> 
      <Footer />      
      </ThemeProvider>
      </React.Fragment>
    )
  }
}

export default App;
