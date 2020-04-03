import React from "react";

import { AuthButton } from "../common";

const HomeView = () => {
	return (
		<div id="home" className="container" style={{ height: `calc(100vh - 90px)` }}>
			<div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "space-around" }}>
				<AuthButton to="/login">Sign in</AuthButton>
				<AuthButton to="/register" secondary>
					Sign up
				</AuthButton>
			</div>
		</div>
	);
};

export default HomeView;
