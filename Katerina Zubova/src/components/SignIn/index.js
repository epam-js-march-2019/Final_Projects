import React from 'react'

import { Redirect } from 'react-router-dom';

import "./style.css";
import "../../style/style.css";

class SignIn extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            password: '',
            passwordRepeat: '',
            isSignIn: false
        };

        this.username=React.createRef();
        this.email=React.createRef();
    }

    render() {

        const {password, passwordRepeat, isSignIn, message}=this.state;

        if (isSignIn) {
            return <Redirect to='/' />;
        }

        return(
            <div className={"sign-in"}>
                <h2>Регистрация пользователя</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor={"userName"}>Ваше имя</label>
                    <input
                        className={"sign-in__input input"}
                        name={'userName'}
                        type={'text'}
                        ref={this.username}
                        required
                    />
                    <label htmlFor={'email'}>Введите email</label>
                    <input
                        className={"sign-in__input input"}
                        name={'email'}
                        type={'email'}
                        ref={this.email}
                        required
                    />
                    <label htmlFor={'password'}>Введите пароль</label>
                    <input
                        className={"sign-in__input input"}
                        name={'password'}
                        type={'password'}
                        value={password}
                        onChange={this.onChangePassword}
                        required
                    />
                    <label htmlFor={'password-repeat'}>Повторите пароль</label>
                    <input
                        className={"sign-in__input input"}
                        name={'password-repeat'}
                        type={'password'}
                        value={passwordRepeat}
                        onChange={this.onChangePasswordRepeat}
                        required
                    />
                    <button type="submit" className={"sign-in__button button"}>Sign in</button>
                    <p>{message}</p>
                </form>
            </div>
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { password, passwordRepeat } = this.state;

        if(password.length<5 || password!=passwordRepeat) {
            this.setState({message: "Проверьте правильность ввода паролей следуя подсказкам"});
            return
        }

        const username=this.username.current.value;
        const email=this.email.current.value;

       const keys=Object.keys(localStorage);

        if (keys.includes(email)) {
            this.setState({message: "Пользователь с данным именем уже зарегистрирован"});
            return
        }

        this.setState({isSignIn: true});
        const obj = JSON.stringify({name: username, email: email, password: password, trekking: []}); //сериализуем его
        localStorage.setItem(email, obj);
    }

    onChangePassword = (e) => {
        const value=e.target.value;

        if (value.length<5)
            this.setState({message: "Пароль должен содержать минимум 5 символов"});
        else
            this.setState({message: ""});

        this.setState({password: value});
    }

    onChangePasswordRepeat = (e) => {
        const value=e.target.value;
        const {password}=this.state;

        if (value!=password)
            this.setState({message: "Пароли не совпадают"});
        else
            this.setState({message: ""});

        this.setState({passwordRepeat: value});
    }

}

export default SignIn