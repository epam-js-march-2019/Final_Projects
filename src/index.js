import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./containers/Menu";
import "semantic-ui-css/semantic.min.css";
import "./app.css";

import App from "./containers/App";
import MyCabinet from "./components/MyCabinet";
import createStore from "./store";
const store = createStore();
const Root = () => (
  <Router>
    <React.Fragment>
      <Menu />
      <Switch>
        <Route component={App} exact path="/" />
        <Route component={MyCabinet} path="/cabinet" />
      </Switch>
    </React.Fragment>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("root")
);
