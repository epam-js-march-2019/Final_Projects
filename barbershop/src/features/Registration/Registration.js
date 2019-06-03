import React from 'react';
import { connect } from 'react-redux';
import { registrationRequest } from './actionCreators';
import { Link } from 'react-router-dom'



class Registration extends React.Component {
  state = {
    login: '',
    email: '',
    password: ''
  };

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  submitRegistration = (event) => {
    event.preventDefault();
    const { login, email, password } = this.state

    this.props.registration({ login, email, password })
  }

  render() {
    const { login, email, password } = this.state
    return (
      <div>
        <form className='registration-form' onSubmit={this.submitRegistration}>
          <div className='registration-form_inner'>
            <Link className='navlinks-log' to='/login'>Sign in</Link>
          </div>
          <legend className='subtitle subtitle-registration'>Join us</legend>
          <input type='text' name='login' value={login} onChange={this.handleChange} required placeholder='Enter your login' />
          <input type='email' name='email' value={email} onChange={this.handleChange} required placeholder='Enter your email' />
          <input type='password' name='password' value={password} onChange={this.handleChange} required placeholder='Create your password' />
          <button className='button' type='submit'> Enter </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    registration: (data) =>
      dispatch(registrationRequest(data))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Registration)

