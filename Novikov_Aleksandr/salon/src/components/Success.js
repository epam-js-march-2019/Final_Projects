import React from "react";

function Success(props) {
	return (
		<div id="success">
			<p>Success</p>
			<p>{props.msg}</p>
		</div>
	);
}

export default Success;