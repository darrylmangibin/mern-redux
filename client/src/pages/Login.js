import React, { Fragment } from 'react'

import LoginFieldsContainer from '../components/containers/auth/LoginFieldsContainer';
import { Nav } from '../components/layout'

const Login = () => {
  return (
		<Fragment>
			<Nav />
			<LoginFieldsContainer />
		</Fragment>
	);
}

export default Login
