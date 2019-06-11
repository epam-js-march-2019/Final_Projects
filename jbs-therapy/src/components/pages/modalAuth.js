import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import {
    Link
} from 'react-router-dom';
import axios from 'axios';
import ModalAuthSignUp from './modalAuthSignUp';
import Profilepage from "./profilePage";

class ModalAuth extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.onChange= this.onChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            email: '',
            password: '',
            name:'',
            isSubmitted: false,
            show: false
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }
    onChange(e) {
        this.setState({ [e.target.name]:e.target.value });
    }
    handleClick(e) {
        let id = this.state.email;
        let currentPassword = this.state.password;
        let isNewUser = true;
        for (let i=0; i < localStorage.length; i++) {
            if ( id === localStorage.key(i)) {isNewUser=false; break; }
        }
        if (isNewUser===true) {
            alert('Такой пользователь не зарегистрирован')}
        if (!isNewUser) {
            let storeObj = JSON.parse(localStorage.getItem(id));
            let storePassword = storeObj.password;
            if (currentPassword !== storePassword) {
                alert('Неверный пароль');
            }
            let storeName = storeObj.name;
            this.setState({name: storeName});
            this.setState({isSubmitted: true});
            this.handleClose();
        }
    }

        render() {
        return (
            <>
                <Link onClick={this.handleShow}>
                    Войти
                </Link>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Личный кабинет</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='registration-form__form-field'>
                        <label className='registration-form__label' htmlFor='email'> E-MAIL  </label>
                        <input required id='email' type='email' className='registration-form__input' placeholder='Введите ваш e-mail' name='email' value={this.state.email} onChange={this.onChange}/>
                    </div>
                        <div className='registration-form__form-field'>
                            <label className='registration-form__label' htmlFor='password'> ПАРОЛЬ </label>
                            <input required id='password' type='password' className='registration-form__input' placeholder='Введите пароль' name="password" value={this.state.password} onChange={this.onChange}/>
                        </div>
                        <div className='registration-form__submit'>
                            <button className='registration-form__button' onClick={this.handleClick}>Войти</button>
                        </div>
                    </Modal.Body>
                </Modal>
            </>
        );
    }

}

export default ModalAuth;