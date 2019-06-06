import React, { Component } from 'react';
import Showcase from '../components/Showcase';
import Advantages from '../components/Advantages';

class LandingPage extends Component {
    render() {
      return(
        <React.Fragment>
        <Showcase />
        <Advantages />
        </React.Fragment>
      )
    }
}

export default LandingPage;