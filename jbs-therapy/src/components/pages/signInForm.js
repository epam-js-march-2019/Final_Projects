import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import signInPic from './signinpic.jpg';
import ProfilePage from './profilePage';
import ModalAuth from './modalAuth';

class SignIn extends Component {
        constructor() {
            super();
            this.state = {
                email: '',
                password: '',
                name:'',
                isSubmitted: false,
                redirectToReferrer: false
            };
            this.onChange= this.onChange.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
        };

        onChange(e) {
            this.setState({ [e.target.name]:e.target.value });
        }

        onSubmit(e) {
            e.preventDefault();
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
            }
        }
    render() {
            if (this.state.isSubmitted)
            {
                return <ProfilePage name={this.state.name} email={this.state.email} submitted={this.state.isSubmitted}/>
            } else {
                return ( <div className="registration-form">
                <div className='registration-form--left-side'>
                    <img className='registration-form__pic' alt='JoinOurClub' src={signInPic}/>
                </div>
                <form className='registration-form__box' onSubmit={this.onSubmit}>
                    <div className='registration-form__form-field'>
                        <label className='registration-form__label' htmlFor='email'> E-MAIL  </label>
                        <input required id='email' type='email' className='registration-form__input' placeholder='Введите ваш e-mail' name='email' value={this.state.email} onChange={this.onChange}/>
                    </div>
                    <div className='registration-form__form-field'>
                        <label className='registration-form__label' htmlFor='password'> ПАРОЛЬ </label>
                        <input required id='password' type='password' className='registration-form__input' placeholder='Введите пароль' name="password" value={this.state.password} onChange={this.onChange}/>
                    </div>
                    <div className='registration-form__submit'>
                        <button className='registration-form__button'>Войти</button>
                        <Link to='/SignUp' className='registration-form__link'>Создать аккаунт</Link>
                    </div>
                </form>
            </div>
                );
            }
    }
}

export default SignIn;
