import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Authentication from '../containers/Authentication';
import {Nav} from 'react-bootstrap';



class Layout extends Component{

    render() {
        return (
            <div>
                <Nav variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link as={Link} to={"/"}> Главная </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to={"/contacts"}> Контакты </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to={"/user/profile"}> Профиль </Nav.Link>
                    </Nav.Item>
                </Nav>
                <div className='background'>
                <div>
                    <h1>Sheep Barbershop</h1>
                </div>
                <div className='wrapper'>
                    <div>
                        <Authentication />
                    </div>
                    <div>
                        {this.props.children}
                    </div>
                </div>
                </div>
            </div>
        )
    }

}

export default Layout;