import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import Detail from "./components/Detail";

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route exact path="/" component={Main} />
				<Route path="/details" component={Detail} />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById("root")
);
