import React from 'react';
import './ModalAuth.css'
import {
    EMPTY_LOGIN,
    LOGIN_LESSER_THAN_8,
    PASSWORD_LESSER_THAN_8,
    PASSWORDS_DO_NOT_MATCH,
    EMPTY_PASSWORD} from "../../constants/error-messages";

class ModalAuth extends React.Component{
    constructor(props){
        super(props);
        this.passAuth = this.passAuth.bind(this);
        this.passRegistration = this.passRegistration.bind(this);
    }

    state = {
        login: '',
        password: '',
        passwordConfirm: '',
        showAuth: false,
        showRegistration: false,
        errorMessage: ''
    };

    passAuth(e){
        e.preventDefault();
        console.log(this.state.password);
        document.getElementById('authForm').reset();
        if(this.state.login === '') {
            this.setState({errorMessage: EMPTY_LOGIN});
            document.getElementById('authForm').reset();
            return;
        }
        if(this.state.password === ''){
            this.setState({errorMessage: EMPTY_PASSWORD});
            document.getElementById('authForm').reset();
            return;
        }
        console.log(this.state.showAuth);
        this.props.auth(this.state.login, this.state.password);
    }

    passRegistration(e){
        e.preventDefault();
        if(this.state.login === ''){
            this.setState({errorMessage: EMPTY_LOGIN});
            document.getElementById('authForm').reset();
            return;
        } else{
            if(this.state.login.length < 8){
                this.setState({errorMessage: LOGIN_LESSER_THAN_8});
                document.getElementById('authForm').reset();
                return;
            }
            if(this.state.password.length < 8){
                this.setState({errorMessage: PASSWORD_LESSER_THAN_8});
                document.getElementById('authForm').reset();
                return;
            }
            if(this.state.password !== this.state.passwordConfirm){
                this.setState({errorMessage: PASSWORDS_DO_NOT_MATCH});
                document.getElementById('authForm').reset();
                return;
            }
        }
        this.props.registration(this.state.login, this.state.password);
    }

    updateLogin = (e) => {
        this.setState({login: e.target.value})
    };

    updatePassword = (e) => {
        this.setState({password: e.target.value})
    };

    updatePasswordConfirm = (e) => {
        this.setState({passwordConfirm: e.target.value})
    };

    render(){
        if(!this.props.showAuth && !this.props.showRegistration) {
            return null;
        }
        if(this.props.showAuth){
            return(
                <div className='backdrop'>
                    <section className='modal'>
                        <p className='errorMessage'>
                            {this.state.errorMessage}
                        </p>
                        <form id='authForm'
                              className='modalForm'
                              onSubmit={this.passAuth}>
                            <label className='authLabel'> login:
                                <input value = {this.state.clear}
                                       type='text'
                                       name='login'
                                       onChange={this.updateLogin}
                                       placeholder='enter your login'/>
                            </label>
                            <label className='authLabel'> password:
                                <input value={this.state.clear}
                                       type='password'
                                       placeholder='enter your password'
                                       name='password'
                                       onChange={this.updatePassword}
                                />
                            </label>
                            <input className='button confirmButton'
                                   type='submit'
                                   value='Confirm'
                            />
                        </form>
                        <div className='button cancelButton'
                             onClick={this.props.onClose}
                             name='authWindow'>
                            Cancel
                        </div>
                    </section>
                </div>
            );
        }
        if(this.props.showRegistration) {
                return (
                    <div className='backdrop'>
                        <div className='modal'>
                            <p>Registrating new user</p>
                            <p className = 'errorMessage'>{this.state.errorMessage}</p>
                            <form id='authForm'
                                  className ='modalForm'
                                  onSubmit={this.passRegistration}>
                                <label className='authLabel'> login:
                                    <input type='text'
                                           name='login'
                                           onChange={this.updateLogin}
                                           placeholder='enter your login'
                                    />
                                </label>
                                <label className='authLabel'> password:
                                    <input type='password'
                                           placeholder='enter your password'
                                           name='password'
                                           onChange={this.updatePassword}
                                    />
                                </label>
                                <label className='authLabel'> confirm password:
                                    <input type='password'
                                           placeholder='confirm your password'
                                           name='password'
                                           onChange={this.updatePasswordConfirm}
                                    />
                                </label>
                                    <input type='submit'
                                           value='Confirm'
                                           className='button confirmButton'
                                    />
                            </form>
                            <div className='button cancelButton'
                                 onClick={this.props.onClose}
                            >
                                Cancel
                            </div>
                        </div>
                    </div>
                );
        }
    }
}

export default ModalAuth;