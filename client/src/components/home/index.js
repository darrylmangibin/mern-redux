import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { AuthButton } from "../common";

const HomeView = ({ authenticated, history }) => {
	useEffect(() => {
		console.log(authenticated)
		if (authenticated) {
			history.push("/notes");
		}
		// eslint-disable-next-line
	}, [authenticated]);
	return (
		<div
			id="home"
			className="container"
			style={{ height: `calc(100vh - 90px)` }}
		>
			<div
				style={{
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-around",
				}}
			>
				<AuthButton to="/login">Sign in</AuthButton>
				<AuthButton to="/register" secondary>
					Sign up
				</AuthButton>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps)(withRouter(HomeView));
