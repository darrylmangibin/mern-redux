import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({
	authenticated,
	loading,
	component: Component,
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={props => {
				if (!authenticated && !loading) {
					return <Redirect to="/login" />;
				}
				return <Component {...props} />;
			}}
		/>
	);
};

const mapStateToProps = state => {
	return {
		authenticated: state.auth.authenticated,
		loading: state.auth.loading
	};
};

export default connect(mapStateToProps)(PrivateRoute);
