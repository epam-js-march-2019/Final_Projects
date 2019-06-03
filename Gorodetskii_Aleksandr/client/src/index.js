import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "gestalt/dist/gestalt.css";

import App from "./components/App";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Checkout from "./components/Checkout";
import Navbar from "./components/Navbar";
import registerServiceWorker from "./registerServiceWorker";
import Products from './components/Products'

//Stateless component
const Root = () => (
  <Router>
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route component={App} exact path="/" />
        <Route component={SignIn} path="/signin" />
        <Route component={SignUp} path="/signup" />
        <Route component={Checkout} path="/checkout" />
				<Route component={Products} path='/:productId' />
      </Switch>
    </React.Fragment>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();

//Enable webp hotreload
if (module.hot) {
  module.hot.accept();
}
