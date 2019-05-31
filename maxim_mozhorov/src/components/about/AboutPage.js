import React, {Component} from 'react';
import About from './About';

class AboutPage extends Component{
    render() {
        return (
            <div className="container about-block">
                <h1>О нас</h1>
                <About/>
            </div>
        );
    }

}

export default AboutPage;