/* TODO
* 1. Add frontend form validation
* 2. Add styles to error messages
 */

import React from "react";
import Success from './Success';
import Error from './Error';
import {connect} from 'react-redux';
import {login} from "../actions/authActions";

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.nameField = React.createRef();
		this.phoneField = React.createRef();
		this.emailField = React.createRef();
		this.passField = React.createRef();

		this.state = {
			error: false,
			success: false,
			msg: null
		}
	}


	onRegisterSubmit(event) {
		event.preventDefault();
		this.setState({error: false, success: false});
		console.log(this.nameField.current.value);
		const data = {
			name: this.nameField.current.value,
			phone: this.phoneField.current.value,
			email: this.emailField.current.value,
			password: this.passField.current.value,
		};
		fetch('/api/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		.then(response => {
			if (response.status != 200) {
				response.text()
					.then(message => {
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
					sessionStorage.setItem('salon-app-token', user.token);
					sessionStorage.setItem('salon-app-logged', true);
					this.props.history.push('/account');
				})
			}
		})
		.catch(err => {
			console.log("error while trying to register");
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
			<>
				{error === true && <Error msg={msg}/>}
				{success === true && <Success msg={msg}/>}

				<form>
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input
							type="text" className="form-control"
							id="name" ref={this.nameField}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="phone">Phone number</label>
						<input
							type="tel" className="form-control"
							id="phone" ref={this.phoneField}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="email">Email address</label>
						<input
							type="email" className="form-control"
							id="email" ref={this.emailField}
						/>
						<small id="emailHelp" className="form-text text-muted">
							We'll never share your email with anyone else.
						</small>
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
						onClick={this.onRegisterSubmit.bind(this)}
					>
						Submit
					</button>
				</form>
			</>
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

export default connect(mapStorageToProps, mapDispatchToProps)(Register);