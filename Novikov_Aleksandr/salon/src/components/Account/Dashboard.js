import React from "react";
import {connect} from "react-redux";
import './Dashboard.css';

class Dashboard extends React.Component {

	render() {
		return (
			<div id="dashboard">
				Hello {this.props.name}, this is your account
			</div>
		);
	}
}

function mapStorageToProps(storage) {
	return {
		name: storage.authReducer.name
	}
}

export default connect(mapStorageToProps)(Dashboard);