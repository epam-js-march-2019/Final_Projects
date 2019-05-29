/* TODO
* 1. That fetch functions are really ugly, do smth with them
* 2. Until a better implementation of router is found,
* use component lifecycle hooks to redirect logged users away from here
* 3. success state seems to be redundant
 */

import React from "react";
import Success from './Success';
import Error from './Error';
import {connect} from "react-redux";
import {login} from '../actions/authActions'

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.emailField = React.createRef();
		this.passField = React.createRef();
		this.state = {
			error: false,
			success: false,
			msg: null
		}
	}

	onLoginSubmit(event) {
		event.preventDefault();
		this.setState({error: false, success: false});

		const data = {
			email: this.emailField.current.value,
			password: this.passField.current.value,
		};

		fetch('/api/auth', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(response => {
				if (response.status != 200) {
					response.text().then(message => {
						this.setState({
							error: true,
							msg: message
						})
					})
				}
				else {
					response.json().then(user => {
						this.props.login(user.name, user.token);
						sessionStorage.setItem('salon-app-name', user.name);
						/* Is this bad? */
						sessionStorage.setItem('salon-app-token', user.token);
						sessionStorage.setItem('salon-app-logged', true);
						this.props.history.push('/account');
					})
				}
			})
			.catch(err => {
				console.log("error while trying to login");
				this.setState({
					error: true,
					errorMsg: err.statusText
				})
			})
	}

	render() {
		if (this.props.logged)
			this.props.history.push('/account');

		const {error, success, msg} = this.state;


		return (
			<div id="login-form">
				{error === true && <Error msg={msg}/>}
				{success === true && <Success msg={msg}/>}

				<form>
					<div className="form-group">
						<label htmlFor="email">Email address</label>
						<input
							type="email" className="form-control"
							id="email" ref={this.emailField}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password" className="form-control"
							id="password" ref={this.passField}
						/>
					</div>

					<button
						type="submit" className="btn btn-primary"
						onClick={this.onLoginSubmit.bind(this)}
					>
						Login
					</button>
				</form>
			</div>
		);
	}
}

function mapStorageToProps(storage) {
	return {
		logged: storage.authReducer.logged,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		login: function (name, token) {
			dispatch(login(name, token))
		}
	}
}

export default connect(mapStorageToProps, mapDispatchToProps)(Login);