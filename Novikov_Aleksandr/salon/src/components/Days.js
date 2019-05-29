import React from "react";
import moment from 'moment';
// function moment() {return moment().zone(-3)}

function Days(props) {
	// console.log(props.days);
	// console.log(moment(props.day.day));
	const days = props.days.map(day => (
		<div
			key={day.id}
			onClick={() => props.handleClick(day.id)}
			className="date"
		>
			<p>{moment(day.day).format("MMMM")}</p>
			<p>{moment(day.day).format("DD")}</p>
			<p>{moment(day.day).format("ddd")}</p>
		</div>
	));
	return (
		<div id="dates">
			{days}
		</div>
	);
}

export default Days;