import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import {
    Link
} from 'react-router-dom';
import ModalAuth from './modalAuth';

class ModalAuthSignUp extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <>
                <Link onClick={this.handleShow}>
                   Регистрация
                </Link>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Личный кабинет</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='registration-form__form-field'>
                            <label className='registration-form__label' htmlFor='name'> ПОЛНОЕ ИМЯ </label>
                            <input required id='name'
                                   type='text'
                                   className='registration-form__input'
                                   placeholder='Введите полное имя'
                                   name='name'
                                   onChange={this.onChange}
                                   value={this.state.name}
                            />
                        </div>
                        <div className='registration-form__form-field'>
                            <label className='registration-form__label' htmlFor='password'> ПАРОЛЬ </label>
                            <input required id='password'
                                   type='password'
                                   className='registration-form__input'
                                   placeholder='Введите пароль'
                                   name='password'
                                   onChange={this.onChange}
                                   value={this.state.password}
                            />
                        </div>
                        <div className='registration-form__form-field'>
                            <label className='registration-form__label' htmlFor='password'> ПОДТВЕРЖДЕНИЕ ПАРОЛЯ </label>
                            <input required id='passwordConfirmation'
                                   type='password'
                                   className='registration-form__input'
                                   placeholder='Введите пароль еще раз'
                                   name='passwordConfirmation'
                                   onChange={this.onChange}
                                   value={this.state.passwordConfirmation}
                            />
                        </div>
                        <div className='registration-form__form-field'>
                            <label className='registration-form__label' htmlFor='email'> E-MAIL </label>
                            <input required id='email'
                                   type='email'
                                   className='registration-form__input'
                                   placeholder='Введите ваш e-mail'
                                   name='email'
                                   onChange={this.onChange}
                                   value={this.state.email}
                            />
                        </div>
                        <div className='registration-form__submit'>
                            <button className='registration-form__button'>Зарегистрироваться</button>
                        </div>
                    </Modal.Body>
                </Modal>
            </>
        );
    }

}

export default ModalAuthSignUp;