/* TODO
* 1. Add redirects from several routes depending on logged state -DONE
 */

import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Content from "./Content";
import Main from "./Main";
import Enlist from "./Enlist";
import Register from "./Register";
import Login from "./Login";
import Account from "./Account";
import Records from "./Account/Records";
import Dashboard from "./Account/Dashboard";

class Root extends React.Component {
	render() {
		return (
			/*
			* From version 4 react-router is a dynamic router that means
			* that deep nested routes should be rendered inside peed component
			* Here is an approach to make static routing with react router and it seems to work, but looks ugly
			 */
			<Router>
				<Route path={"/"} component={Content}/>
				<Switch>
					<Route exact path={"/"} component={Main}/>
					<Route path={"/main"} component={Main}/>
					<Route path={"/enlist"} component={Enlist}/>
					<Route path={"/register"} component={Register}/>
					<Route path={"/login"} component={Login}/>
					<Route path={"/account"} component={Account}/>
				</Switch>
			</Router>
		);
	}
}

export default Root;


/* Old router is much better but it has some issues with passing redux
* components :[ */

/*
v ^3.0.0 implementation
import {Router, Route, browserHistory, IndexRoute} from "react-router";
<Router history={browserHistory}>

	<Route path={"/"} component={Content}>
		<IndexRoute component={Main}/>
		<Route exact path={"main"} component={Main}/>
		<Route path={"enlist"} component={Enlist}/>
		<Route path={"register"} component={Register}/>
		<Route path={"login"} component={Login}/>
	</Route>

</Router>*/
