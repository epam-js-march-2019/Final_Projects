import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import Root from "./components/Root.js";
import store from "./store.js";

render (
	<Provider store={store}>
		<Root/>
	</Provider>,
	window.document.getElementById("root")
);



