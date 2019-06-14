import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import PriceList from './components/PriceList';
import Profile from './components/Profile';
import SignUpForm from './components/SignUp';
import SignInForm from './components/SignIn';

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/react_barbershop" component={LandingPage} />
            <Route path="/services" component={PriceList} />
            <Route path='/profile' component={Profile} />
            <Route path="/sign-up" component={SignUpForm} />
            <Route path="/sign-in" component={SignInForm} />
          </Switch>
          <Footer />      
        </ThemeProvider>
      </React.Fragment>
    )
  }
}

export default App;
