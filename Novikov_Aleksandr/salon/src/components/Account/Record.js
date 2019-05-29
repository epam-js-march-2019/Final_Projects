import React from "react";
import moment	from "moment";

function Record(props) {
	// console.log(props.record);
	const date = moment(props.record.date).utc()
		.format('YYYY MMMM Do dddd HH:mm');
	return (
		<div id="record">
			<span>Service: {props.record.service}</span>
			<span>Date: {date}</span>
		</div>
	);
}

export default Record;