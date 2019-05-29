import React from "react";
import axios from "axios";
import Record from "./Record";
import Error from "../Error";
import {connect} from "react-redux";
import {logout} from "../../actions/authActions";

class Records extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			error: false,
			msg: "",
			records: []
		};
		this.url = '/api/records';
	}

	componentDidMount() {
		if(this.props.old == true)
			this.url += '?type=past';

		axios({
			method: 'get',
			url: this.url,
			headers: {
				'Content-Type': 'application/json',
				'x-auth-token': this.props.token
			}
		})
		.then(response => {
			this.setState({
				loading: false,
				records: response.data
			});
		})
		.catch(err => {
			this.setState({
				error: true,
				loading: false,
				msg: err.message + err.response.data,
			})
		});
		// console.log("asdfasdf", this.props);
	}

	render() {
		// console.log("asdfasdf", this.props);

		if (this.state.loading)
			return(<div> Loading...</div>);

		if (this.state.error)
			return <Error msg={this.state.msg}/>;

		const records = this.state.records.map(record => (
			<Record record={record} key={record._id}/>
		));

		return (
		<div>

			{records}
		</div>
		);
	}
}

function mapStorageToProps(storage) {
	return {
		token: storage.authReducer.token,
	}
}

export default connect(mapStorageToProps)(Records);
