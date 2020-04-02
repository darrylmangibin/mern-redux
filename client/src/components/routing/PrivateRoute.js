import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { selectAuthenticated, selectLoading } from "../../redux/auth/selectors";
import { createStructuredSelector } from "reselect";

const PrivateRoute = ({
	loading,
	authenticated,
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

const mapStateToProps = createStructuredSelector({
	authenticated: selectAuthenticated,
	loading: selectLoading
});

export default connect(mapStateToProps)(PrivateRoute);
