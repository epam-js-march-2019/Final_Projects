import React from "react";
import moment from 'moment';
// function moment() {return moment().zone(-3)}

function Times(props) {
	// console.log(props);

	const times = [];
	const day = moment(props.day.day).utc();
	// console.log(day);
	// console.log(day.hours());
	// console.log(props.day.closes);

	for (let hour = day.hours(); hour < props.day.closes; hour++)	{
		console.log("hour: ", hour);
		console.log("props.day.closes: ", props.day.closes);
		times.push(
			<div
				key={hour}
				onClick={() => props.handleClick(hour)}
				className="date time"
			>
				<p>{day.hours(hour).format("HH:mm")}</p>
			</div>
		);
	}

	return (
		<div id="dates">
			{times}
		</div>
	);
}

export default Times;