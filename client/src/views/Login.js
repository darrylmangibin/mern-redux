import React from "react";

import Layout from "../components/layout/Layout";
import { Navigation } from "../components/layout/";
import LoginFieldsContainer from '../components/containers/LoginFieldsContainer';

const Create = () => {
	return (
		<Layout>
			<Navigation />
			<LoginFieldsContainer />
		</Layout>
	);
};

export default Create;
