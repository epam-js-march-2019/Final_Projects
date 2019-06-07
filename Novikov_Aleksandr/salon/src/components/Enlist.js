/*TODO
* 1. fetch() API looks too ugly, maybe use Axios instead? - DONE
* 2. Current implementation fetches moment.js objects formatted to string
* and then uses moment.js library on client to instantiate moment object.
* What if we send non-formatted raw moment objects from the server?
* It could make code much cleaner - should try.
*/

import React from "react";
import Service from './Service';
import Days from './Days';
import Times from './Times';
import Summary from './Summary';
import Success from './Success';
import Error from './Error';
import _ from 'lodash';
import {connect} from "react-redux";
import axios from 'axios';
import moment from 'moment';
import {Link} from 'react-router-dom';
import './Enlist.css';

/*
* this.data should consist of day objects fetched from server
* day object should look like this:
* day = {
* 	id: 0,
* 	day: momenj.js object formatted to string,
* 	closes: SALON_CLOSES
* };
* */

class Enlist extends React.Component {
	constructor(props) {
		super(props);

		this.services = [
			{
				name: "Women's haircut",
				price: "$35",
				img: "woman-haircut.png"
			}, {
				name: "Men's haircut",
				price: "$20",
				img: "man-haircut.png"
			}, {
				name: "All over color",
				price: "$45",
				img: "all-over-color.png"
			}, {
				name: "Partial highlights",
				price: "$65",
				img: "partial-highlights.png"
			}, {
				name: "Permanent Wave",
				price: "$85",
				img: "permanent-wave.png"
			}];
		this.stateNames = ["service", "day", "time"];
		this.data = "";
		this.state = {
			step: 0,
			service: "",
			day: "",
			time: "",
			error: false,
			success: false,
			loading: true,
			msg: "",
			submitted: false
		}
	}

	componentDidMount() {
		axios({
			method: 'get',
			url: '/api/dates',
		})
			.then(response => {
				this.setState({
					loading: false,
				});
				this.data = response.data;
				// console.log(typeof response.data);
				// console.log(response.data);
			})
			.catch(err => {
				// console.log(Object.getOwnPropertyDescriptors(err));
				this.setState({
					loading: false,
					error: true,
					msg: err.message,
				})
			});
	}

	onServiceClick(name) {
		this.setState({
			service: name,
			step: this.state.step + 1
		});
	}

	onDayClick(id) {
		// console.log(`onDayClick(${id})`);
		this.setState({
			day: this.data[id],
			step: this.state.step + 1
		})
	}

	onTimeClick(time) {
		this.setState({
			time: time,
			step: this.state.step + 1
		})
	}

	onBack() {
		this.setState({
			step: this.state.step - 1,
			submitted: false,
			error: false,
			success: false
		})
	}

	onReset() {
		this.setState({
			step: 0,
			submitted: false,
			error: false,
			success: false
		})
	}

	onSubmit() {
		event.preventDefault();
		this.setState({error: false, success: false, submitted: true});

		const date = moment(this.state.day.day).utc().hours(this.state.time);
		/* Debug server validation:*/
		// const date = moment().utc().add(10, 'days');
		// console.log(date);

		axios({
			method: 'post',
			url: '/api/records',
			headers: {
				'Content-Type': 'application/json',
				'x-auth-token': this.props.token
			},
			data: {
				service: this.state.service,
				date: date
			}
		})
			.then(response => {
				// console.log(Object.getOwnPropertyDescriptors(response));
				this.setState({
					success: true,
					msg: response.data
				});
			})
			.catch(err => {
				console.log(Object.getOwnPropertyDescriptors(err));
				this.setState({
					error: true,
					msg: err.message + err.response.data,
				})
			});

		/* fetch sux ;D */
		// fetch('/api/records', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 		'x-auth-token': this.props.token
		// 	},
		// 	body: JSON.stringify(_.pick(this.state, ['service', 'day', 'time']))
		// })
		// .then(response => {
		// 	response.text().then(message => {
		// 		if (response.status != 200) {
		// 			this.setState({
		// 				error: true,
		// 				msg: message
		// 			})
		// 		}
		// 		else {
		// 			this.setState({
		// 				success: true,
		// 				msg: message
		// 			})
		// 		}
		// 	})
		// })
		// .catch(err => {
		// 	this.setState({
		// 		error: true,
		// 		errorMsg: err.statusText
		// 	})
		// })
	}

	render() {
		if (this.props.logged == false || this.props.logged == null)
			return (
				<div className="page-content">
					<div className="unauthorized">
						Unfortunately, enlisting is only available for registered users
						<br/>
						Please try to <Link to={"/login"}>login</Link> or <Link to={"/register"}>register</Link>
					</div>
				</div>
			);

		if (this.state.loading)

			return (
				<div className="page-content">
					<div className="unauthorized">Loading...</div>
				</div>
			);

		const services = this.services.map(service => {
			return (
				<Service
					name={service.name}
					price={service.price}
					key={service.name + service.price}
					img={service.img}
					handleClick={this.onServiceClick.bind(this)}
				/>
			)
		});

		return (
			<div className="page-content">
			<div id="enlist" className="container">

				{/* SUMMARY */}
				{this.state.step > 0 &&

				<Summary
					step={this.state.step}
					service={this.state.service}
					day={this.state.day}
					time={this.state.time}
				>
				{/* MESSAGES */}
				{this.state.error && <Error msg={this.state.msg}/>}
				{this.state.success && <Success msg={this.state.msg}/>}
				</Summary>
				}



				{/* SERVICE */}
				{this.state.step == 0 &&

				services
				}

				{/* DAY */}
				{this.state.step == 1 &&

				<Days
					days={this.data}
					handleClick={this.onDayClick.bind(this)}
				/>
				}

				{/* TIME */}
				{this.state.step == 2 &&

				<Times
					day={this.state.day}
					handleClick={this.onTimeClick.bind(this)}
				/>
				}

				{/* BUTTONS */}
				<div className="enlist-buttons">
				{this.state.step != 0 &&
				<button
					className="btn btn-secondary btn-lg"
					onClick={this.onReset.bind(this)}
				>
					Reset
				</button>
				}

				{this.state.step != 0 &&
				<button
					className="btn btn-info btn-lg"
					onClick={this.onBack.bind(this)}
				>
					Back
				</button>
				}

				{this.state.step == 3 &&
				this.state.submitted == false &&

				<button
					className="btn btn-success btn-lg"
					onClick={this.onSubmit.bind(this)}
				>
					Submit
				</button>
				}
				</div>

			</div>
			</div>
		);
	}
}

function mapStorageToProps(storage) {
	return {
		token: storage.authReducer.token,
		logged: storage.authReducer.logged,
	}
}

export default connect(mapStorageToProps)(Enlist);

