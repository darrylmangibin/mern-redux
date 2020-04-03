import React, { Fragment } from "react";

import HeaderContianer from '../containers/HeaderContianer';

const Layout = props => {
	return (
		<Fragment>
			<HeaderContianer />
			{props.children}
		</Fragment>
	);
};

export default Layout;
