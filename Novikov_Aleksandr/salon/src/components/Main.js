import React from "react";

function Main(props) {
	return (
		<div className="container page-content" id="main">
			<div className="row">
				<h2 className="col-sm">This is a demo website of a beauty salon</h2>
			</div>

			<div className="content">
				<div className="contacts">
					<p><span>Address:</span> American Samoa, Pago-Pago island</p>
					<p><span>Phone</span>: +0(0000)-00-00</p>
					<p><span>Time open:</span> around the clock</p>
				</div>
				<div className="map">
					<iframe src="https://yandex.com/map-widget/v1/?um=constructor%3Aa538a3db68fcb3c3565f9e69c8626889083217fc74442d3221fb9283f7696309&amp;source=constructor" width="488" height="373" frameBorder="0">
					</iframe>
				</div>
			</div>


		</div>
	);
}

export default Main;