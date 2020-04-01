import React from "react";

import Layout from "../components/layout/Layout";
import { Navigation } from "../components/layout/";
import EditFields from "../components/edit/EditFields";

const Edit = () => {
	return (
		<Layout>
			<Navigation />
			<EditFields />
		</Layout>
	);
};

export default Edit;
