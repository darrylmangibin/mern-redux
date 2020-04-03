import React, { Fragment } from "react";

import RegisterFieldsContainer from "../components/containers/auth/RegisterFieldsContainer";
import { Nav } from "../components/layout";

const Login = () => {
	return (
		<Fragment>
			<Nav />
			<RegisterFieldsContainer />
		</Fragment>
	);
};

export default Login;
