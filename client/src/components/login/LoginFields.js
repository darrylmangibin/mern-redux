import React from "react";

import { Input, Button } from "../common";

const LoginFields = () => {
	return (
		<div className="container">
      <h2 align="center" style={{ marginTop: 40 }}>Login</h2>
			<form>
				<Input />
				<Input />
				<Button>Login</Button>
			</form>
		</div>
	);
};

export default LoginFields;
