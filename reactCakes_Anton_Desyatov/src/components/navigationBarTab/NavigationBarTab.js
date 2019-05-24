import React from 'react';
import './NavigationBarTab.css'
import {
    Link,
} from 'react-router-dom';
class NavigationBarTab extends React.Component{
    state ={
        name: this.props.name,
        className : this.props.className.toLowerCase() + 'Tab tab',
        showAuth: false
    };

    render(){
            return (
                <div className={this.state.className}>
                    <Link to={this.props.link}
                          className='link'>{this.props.name}
                    </Link>
                </div>
            )
    }
}
export default NavigationBarTab;