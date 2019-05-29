/* TODO
* 1. Add redirects from several routes depending on logged state
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
import Dashboard from "./Account/Info";

class Root extends React.Component {
	render() {
		return (
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
				<Route path={"/account/dashboard"} component={Dashboard}/>
				<Route path={"/account/records"} component={Records}/>
				<Route
					path={"/account/old-records"}
					render={() => <Records old={true}/>}
				/>

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
