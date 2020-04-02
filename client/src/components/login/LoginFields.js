import React, { Component } from "react";
import { store } from "../../redux/store";
import { CLEAR_ERRORS } from "../../redux/types";

import { Input, Button } from "../common";
import { Spinner } from "../layout";
class LoginFields extends Component {
	state = {
		email: "",
		password: ""
	};

	componentDidUpdate(prevProps) {
		if (
			prevProps.authenticated !== this.props.authenticated &&
			this.props.authenticated
		) {
			console.log("REDIRECT");
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
		this.props.loginUser(this.state);
	};

	render() {
		const { email, password } = this.state;
		const { errors, loading } = this.props;
		if (loading) return <Spinner />;
		return (
			<div className="container">
				<h2 align="center" style={{ marginTop: 40 }}>
					Login
				</h2>
				<form onSubmit={this.handleOnSubmit}>
					<div className="input-container">
						{errors.email && <span className="errors">{errors.email}</span>}
						<Input
							autoComplete="off"
							placeholder="Email"
							name="email"
							value={email}
							onChange={this.handleOnChange}
							errors={errors.email}
						/>
					</div>
					<div className="input-container">
						{errors.password && (
							<span className="errors">{errors.password}</span>
						)}
						<Input
							placeholder="Enter password"
							type="password"
							name="password"
							value={password}
							onChange={this.handleOnChange}
							errors={errors.password}
						/>
					</div>
					<Button>Login</Button>
				</form>
			</div>
		);
	}
}

export default LoginFields;
