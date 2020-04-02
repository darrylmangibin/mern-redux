import React, { Fragment } from "react";
import PropTypes from 'prop-types';

import HeaderContainer from '../containers/HeaderContainer';

const Layout = props => {
	return (
		<Fragment>
			<HeaderContainer />
			{props.children}
		</Fragment>
	);
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;
