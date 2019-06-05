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
import {Route, Link, Switch} from "react-router-dom";
import Dashboard from "./Account/Dashboard";
import Records from "./Account/Records";
import './Account.css';

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
			<div className="page-content">
				<div id="account">
					<Link to={`${this.props.match.url}/dashboard`}>Dashboard</Link>
					<Link to={`${this.props.match.url}/records`}>Your records</Link>
					<Link to={`${this.props.match.url}/old-records`}>Your old records</Link>
					<a onClick={this.logout.bind(this)}>Logout</a>
				</div>
				<Route exact path={`${this.props.match.path}`} component={Dashboard}/>
				<Route path={`${this.props.match.path}/dashboard`} component={Dashboard}/>
				<Route path={`${this.props.match.path}/records`} component={Records}/>
				<Route path={`${this.props.match.path}/old-records`}
					component={() => <Records old={true}/>}
				/>

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