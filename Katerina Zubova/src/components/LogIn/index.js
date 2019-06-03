import React from 'react'

import { Redirect } from 'react-router-dom';

import "./style.css";
import "../../style/style.css";

class Login extends React.Component {

    constructor (props) {
        super(props);

        this.email=React.createRef();
        this.password=React.createRef();
    }

    render() {

        const { isAuthorized, errorMsg } = this.props;

        if (isAuthorized) {
            return <Redirect to='/profile'/>;
        }

        return(
            <div className={"log-in"}>
                <h2>Вход в личный кабинет</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className={"log-in__input input"}
                        type={'email'}
                        placeholder={'email'}
                        ref={this.email}
                        required
                    />
                    <input
                        className={"log-in__input input"}
                        type={'password'}
                        placeholder={'Пароль'}
                        ref={this.password}
                        required
                    />
                    <button type="submit" className={"log-in__button button"}>Log in</button>
                </form>
                {<p>{errorMsg}</p>}
            </div>
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const email=this.email.current.value;
        const password=this.password.current.value;

        this.props.logIn(email, password);
    }

}

export default Login