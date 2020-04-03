import React, { Fragment } from "react";

import { Nav } from "../../components/layout";
import CreateFieldsContainer from "../../components/containers/CreateFieldsContainer";

const Create = () => {
	return (
		<Fragment>
			<Nav />
			<CreateFieldsContainer />
		</Fragment>
	);
};

export default Create;
