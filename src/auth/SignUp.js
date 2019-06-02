import React from 'react'
import style from './SignIn.module.css'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {signUp} from "../store/actions/authActions";


class SignUp extends React.Component {
    state = {
        email:'',
        password:'',
        firstName:'',
        lastName:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
    }
    render() {
        const {auth, authError} = this.props;
        if(auth.uid) return <Redirect to='/' />
        return (
            <div className={style.formContainer}>
                <form onSubmit={this.handleSubmit} action="" className={style.form}>
                    <h1 className={style.title}>Sign Up</h1>
                    <div className={style.inputField}>
                        <label htmlFor="" className={style.labelTitul}>Email</label>
                        <input type="email" id="email" onChange={this.handleChange} placeholder='Fill your account email'/>
                    </div>
                    <div className={style.inputField}>
                        <label htmlFor="" className={style.labelTitul}>Password</label>
                        <input type="password" id="password" onChange={this.handleChange} placeholder='Fill your account password'/>
                    </div>
                    <div className={style.inputField}>
                        <label htmlFor="" className={style.labelTitul}>First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange} placeholder='Fill your Name'/>
                    </div>
                    <div className={style.inputField}>
                        <label htmlFor="" className={style.labelTitul}>Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange} placeholder='Fill your account Last Name'/>
                    </div>
                    <div className='inputField'>
                        <button className={style.loginBtn}>Sign Up</button>
                        <div className={style.redText}>
                            { authError ? <p>{ authError }</p> : null}
                        </div>
                    </div>
                </form>
            </div>

        )

    };
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp)