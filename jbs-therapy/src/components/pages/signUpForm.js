import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import signInPic from './signinpic.jpg';
import ProfilePage from './profilePage';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            passwordConfirmation: '',
            name: '',
            isSubmitted: false
        };
        this.onChange= this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        if(this.state.password !== this.state.passwordConfirmation){
           alert("Пароли не совпадают");
           return false;
        }
        else {
            let isExist = false;
            let id = this.state.email;
            for (let i=0; i < localStorage.length; i++) {
                if ( id === localStorage.key(i)) {
                    alert("Пользователь с таким адресом электронной почты уже существует");
                    isExist = true;
                }
            }
            if (!isExist)
            {
                let user = {
                email: this.state.email,
                name: this.state.name,
                password: this.state.password
                };
                localStorage.setItem(id, JSON.stringify(user));
                this.setState({isSubmitted: true});
            }
        }
    }

    render() {
        if (this.state.isSubmitted)
        {
            return <ProfilePage name={this.state.name} email={this.state.email}/>
        } else {
            return (
                <div className="registration-form">
                <div className='registration-form--left-side'>
                    <img className='registration-form__pic' alt='JoinOurClub' src={signInPic}/>
                </div>
                <form className='registration-form__box' onSubmit={this.onSubmit}>
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
                        <Link to='/SignIn'  className='registration-form__link'>У меня уже есть аккаунт</Link>
                    </div>
                </form>
            </div>)
        }
    }
}

export default SignUp;
