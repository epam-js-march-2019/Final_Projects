import React from "react";

function Error(props) {
	console.warn(props.msg);
	return (
		<div id="error">
			<p>Error</p>
			<p>{props.msg}</p>
		</div>
	);

}

export default Error;