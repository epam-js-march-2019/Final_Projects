import React from 'react'
import style from './SignIn.module.css'
import {connect} from "react-redux";
import { signIn } from '../store/actions/authActions';
import {Redirect} from "react-router-dom";

class SignIn extends React.Component {
    state = {
        email:'',
        password:''
    }
    handleChange = (e) => {
        this.setState({
        [e.target.id]:e.target.value
        })

    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }
    render() {
        const { authError,auth } =  this.props;
        if(auth.uid) return <Redirect to='/' />

        return (
            <div className={style.formContainer}>
                <form onSubmit={this.handleSubmit} action="" className={style.form}>
                    <h1 className={style.title}>Sign In</h1>
                    <div className={style.inputField}>
                        <label htmlFor="" className={style.label}>Email:</label>
                        <input type="email" id="email" onChange={this.handleChange} placeholder='Enter your email'/>
                    </div>
                    <div className={style.inputField}>
                        <label htmlFor="" className={style.label}>Password:</label>
                        <input type="password" id="password" onChange={this.handleChange} placeholder='Enter your password'/>
                    </div>
                    <div className={style.btnCont}>
                        <button className={style.loginBtn}>Login</button>
                        <div className={style.redText}>
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </div>
                </form>
            </div>

        )
    };
}

const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        signIn: (creds) => dispatch(signIn(creds))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)