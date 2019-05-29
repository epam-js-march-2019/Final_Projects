import React from "react";
import Header from './Header';

function Content(props) {
	return (
		<div className="">
			<Header/>
			{props.children}
		</div>
	);
}

export default Content;