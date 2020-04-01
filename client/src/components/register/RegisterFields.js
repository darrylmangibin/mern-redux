import React from "react";

import { Input, Button } from "../common";

const RegisterFields = () => {
	return (
		<div className="container">
			<h2 align="center" style={{ marginTop: 40 }}>
				Register
			</h2>
			<form>
				<Input />
				<Input />
				<Input />
				<Input />
				<Button>Register</Button>
			</form>
		</div>
	);
};

export default RegisterFields;
