import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom';
import logo from './logopic.jpg';
import ModalAuth from '../pages/modalAuth';
import ModalAuthSignUp from "../pages/modalAuthSignUp";

class Header extends Component {

    render() {
        return (
            <header>

                <div className='logoImg'>
                    <img alt='logopic' src={logo}/>
                </div>

                <nav>
                    <ul>
                        <li className='first'>
                            <Link to='/'>Главная страница</Link>
                        </li>
                        <li>
                            <Link to='/Products'>Услуги</Link>
                        </li>
                        <li>
                           <Link to="/ProfilePage">Профиль</Link>
                        </li>
                    </ul>
                </nav>

            </header>
        );
    }
}


export default Header;

