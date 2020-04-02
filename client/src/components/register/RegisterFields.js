import React, { Component } from "react";
import { store } from "../../redux/store";
import { CLEAR_ERRORS } from "../../redux/types";

import { Input, Button } from "../common";

class RegisterFields extends Component {
	state = {
		username: "",
		email: "",
		password: ""
	};

	componentDidUpdate(prevProps) {
		if (
			prevProps.authenticated !== this.props.authenticated &&
			this.props.authenticated
		) {
			this.props.history.push("/");
		}
	}

	componentDidMount() {
		store.dispatch({ type: CLEAR_ERRORS });
	}

	handleOnChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleOnSubmit = e => {
		e.preventDefault();
		this.props.registerUser(this.state);
	};

	render() {
		const { username, email, password } = this.state;
		const { errors } = this.props;
		return (
			<div className="container">
				<h2 align="center" style={{ marginTop: 40 }}>
					Register
				</h2>
				<form onSubmit={this.handleOnSubmit}>
					<div className="input-container">
						{errors.username && (
							<span className="errors">{errors.username}</span>
						)}
						<Input
							placeholder="Username"
							type="text"
							name="username"
							value={username}
							onChange={this.handleOnChange}
							errors={errors.username}
						/>
					</div>
					<div className="input-container">
						{errors.email && <span className="errors">{errors.email}</span>}
						<Input
							placeholder="Email"
							name="email"
							value={email}
							onChange={this.handleOnChange}
							errors={errors.username}
						/>
					</div>
					<div className="input-container">
						{errors.password && (
							<span className="errors">{errors.password}</span>
						)}
						<Input
							placeholder="Password"
							name="password"
							type="password"
							value={password}
							onChange={this.handleOnChange}
							errors={errors.username}
						/>
					</div>
					<Button>Register</Button>
				</form>
			</div>
		);
	}
}

export default RegisterFields;
