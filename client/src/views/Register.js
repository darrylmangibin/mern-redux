import React from "react";

import Layout from "../components/layout/Layout";
import { Navigation } from "../components/layout/";
import RegisterFieldsContainer from "../components/containers/RegisterFieldsContainer";

const Register = () => {
	return (
		<Layout>
			<Navigation />
			<RegisterFieldsContainer />
		</Layout>
	);
};

export default Register;
