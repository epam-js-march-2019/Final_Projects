import React, {Component} from 'react';
import Service from '../containers/Service';

class Home extends Component {
    render() {
        return (
            <div>
                <div className='home__welcome'> Добро пожаловать на сайт нашего барбершопа </div>
                <div> <Service/> </div>
            </div>
        )
    }
}

export default Home;