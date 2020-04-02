import React from "react";

import Layout from "../components/layout/Layout";
import { Navigation } from "../components/layout/";
import LoginFields from '../components/login/LoginFields';

const Create = () => {
	return (
		<Layout>
			<Navigation />
			<LoginFields />
		</Layout>
	);
};

export default Create;
