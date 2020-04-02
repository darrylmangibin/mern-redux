import React from "react";

import Layout from "../components/layout/Layout";
import { Navigation } from "../components/layout/";
import RegisterFields from '../components/register/RegisterFields';

const Register = () => {
	return (
		<Layout>
			<Navigation />
			<RegisterFields />
		</Layout>
	);
};

export default Register;
