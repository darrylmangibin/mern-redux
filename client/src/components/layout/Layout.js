import React, { Fragment } from "react";
import PropTypes from 'prop-types';

import Header from "./Header";

const Layout = props => {
	return (
		<Fragment>
			<Header />
			{props.children}
		</Fragment>
	);
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;
