import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/routing/PrivateRoute";
import { store } from "./redux/store";
import { getAuthUser } from "./redux/auth/authActions";

import Home from "./views/Home";
import Edit from "./views/Edit";
import Create from "./views/Create";
import Register from "./views/Register";
import Login from "./views/Login";
import PageNotFound from "./views/PageNotFound";

import "./App.css";

const App = () => {
	useEffect(() => {
		store.dispatch(getAuthUser());
		// eslint-disable-next-lines
	}, []);
	return (
		<Router>
			<Switch>
				<PrivateRoute exact path="/" component={Home} />
				<Route exact path="/edit/:id" component={Edit} />
				<PrivateRoute exact path="/create" component={Create} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/login" component={Login} />
				<Route path="/" component={PageNotFound} />
			</Switch>
		</Router>
	);
};

export default App;
