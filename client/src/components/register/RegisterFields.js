import React, { Component } from "react";

import { Input, Button } from "../common";

class RegisterFields extends Component {
	render() {
		return (
			<div className="container">
				<h2 align="center" style={{ marginTop: 40 }}>
					Register
				</h2>
				<form>
					<div className="input-container">
						<Input
							placeholder="Username"
							type="text"
							name="username"
						/>
					</div>
					<div className="input-container">
						<Input
							placeholder="Email"
							name="email"
						/>
					</div>
					<div className="input-container">
						<Input
							placeholder="Password"
							name="password"
							type="password"
						/>
					</div>
					<div className="input-container">
						<Input
							placeholder="Confirm password"
							name="password2"
							type="password"
						/>
					</div>
					<Button>Register</Button>
				</form>
			</div>
		);
	}
}

export default RegisterFields;
