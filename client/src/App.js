import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/routes/PrivateRoute";
import { store } from "./redux/store/configureStore";
import { authUser } from "./redux/actions/auth";
import setAuthToken from "./utils/setAuthToken";

import "./App.css";

import { Layout } from "./components/layout";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
import MainAppContainer from "./components/containers/mainApp";

const token = localStorage.getItem("token");
if (token) {
	setAuthToken(token);
}

const App = () => {
	useEffect(() => {
		store.dispatch(authUser());
		// eslint-disable-next-line
	}, []);
	return (
		<Router>
			<Layout>
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/about" component={About} />
					<Route exact path="/" component={Home} />
					<PrivateRoute path="/notes" component={MainAppContainer} />
					<Route path="/" component={PageNotFound} />
				</Switch>
			</Layout>
		</Router>
	);
};

export default App;
