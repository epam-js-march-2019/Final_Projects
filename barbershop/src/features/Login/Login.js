import React from 'react';
import { connect } from 'react-redux';
import { loginRequest } from './actionCreators';
import { Link } from 'react-router-dom'





class Login extends React.Component {
  state = {
    login: '',
    password: ''
  };

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  submitLogin = (event) => {
    event.preventDefault();
    const { login, password } = this.state

    this.props.login({ login, password })
  }


  render() {
    const { login, password } = this.state
    return (
      <div>
        <form className='login-form' onSubmit={this.submitLogin}>
          <div className='login-form_inner'>
            <Link className='navlinks-log' to='/registration'>Sign up</Link>
          </div>
          <legend className='subtitle subtitle-login'>Do you have login?<br></br>Please login in</legend>
          <input type='text' name='login' value={login} onChange={this.handleChange} required placeholder='Enter your login' />
          <input type='password' name='password' value={password} onChange={this.handleChange} required placeholder='Enter your password' />
          <button className='button' type='submit'> Enter </button>

        </form>
      </div>

    )
  }
}


const mapDispatchToProps = dispatch => {
  return {

    // implicitly forwarding arguments
    login: (data) =>
      dispatch(loginRequest(data))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Login)

