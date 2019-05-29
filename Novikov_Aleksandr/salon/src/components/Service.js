import React from "react";

function Service(props) {
	const style = {
		backgroundImage: `url("/img/${props.img}")`
	};

	return (
		<div
			className="service"
			onClick={() => props.handleClick(props.name)}
			style={style}
		>
			<span className="service-name">{props.name}</span>
			<span className="service-price">{props.price}</span>
		</div>
	);
}

export default Service;

