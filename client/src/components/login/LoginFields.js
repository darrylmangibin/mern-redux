import React, { Component } from "react";

import { Input, Button } from "../common";

class LoginFields extends Component {
	render() {
		return (
			<div className="container">
				<h2 align="center" style={{ marginTop: 40 }}>
					Login
				</h2>
				<form>
					<div className="input-container">
						<Input placeholder="Email" name="email" />
					</div>
					<div className="input-container">
						<Input
							placeholder="Enter password"
							type="password"
							name="password"
						/>
					</div>
					<Button>Login</Button>
				</form>
			</div>
		);
	}
}

export default LoginFields;
