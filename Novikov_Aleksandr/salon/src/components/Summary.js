import React from "react";
import moment from 'moment';
import './Summary.css';

function Summary(props) {
	const stepMessages = ["", "Select day", "Select time", "Confirm"];
	let day;
	if (props.step == 2)
		day = moment(props.day.day).format("MMMM DD, dddd");
	if (props.step > 2)
		day = moment(props.day.day).hours(props.time).format("MMMM, DD, dddd HH:mm");

	return (
		<div id="summary">
			{ props.step > 0 &&
			<p>
				Step {props.step + 1} {stepMessages[props.step]}
			</p>
			}
			{ props.step > 0 &&

				<p>Service: {props.service}</p>
			}
			{ props.step > 1 &&

				<p>Date: {day}</p>
			}
			{props.children}
		</div>
	);
}

export default Summary;