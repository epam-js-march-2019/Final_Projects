/* TODO
* 1. Currently to navigate unlogged users
* that try to access acccount page to login page
* a redux state 'logged' is checked on componentDidMount
* hook, looks like not a best way to do it, maybe react-router can
* handle that instead? - moved logic to render() looks better
 */

import React from "react";
import {connect} from "react-redux";
import {logout} from "../actions/authActions";
import {Link} from "react-router-dom";

class Account extends React.Component {
	logout() {
		sessionStorage.clear();
		this.props.logout();
		this.props.history.push('/login');
	}


	render() {
		if (this.props.logged == false || this.props.logged == null)
			this.props.history.push('/login');

		return (
			<div id="account">
				<Link to={"/account/dashboard"}>Dashboard</Link>
				<Link to={"/account/records"}>Your records</Link>
				<Link to={"/account/old-records"}>Your old records</Link>
				<a onClick={this.logout.bind(this)}>Logout</a>
			</div>
		);
	}
}

function mapStorageToProps(storage) {
	return {
		name: storage.authReducer.name,
		logged: storage.authReducer.logged
	}
}

function mapDispatchToProps(dispatch) {
	return {
		logout: function () {
			dispatch(logout())
		}
	}
}

export default connect(mapStorageToProps, mapDispatchToProps)(Account);