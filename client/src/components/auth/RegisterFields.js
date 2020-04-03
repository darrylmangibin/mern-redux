import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import { store } from "../../redux/store/configureStore";
import { CLEAR_ERRORS } from "../../redux/actions/types";

import { Input, Button } from "../common";

class RegisterFields extends Component {
	state = {
		username: "",
		email: "",
		password: ""
	};

	componentDidMount() {
		if (this.props.authenticated) {
			this.props.history.push("/notes");
		}
		store.dispatch({ type: CLEAR_ERRORS });
	}

	componentDidUpdate(prevProps) {
		if (this.props.authenticated) {
			this.props.history.push("/notes");
		}
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
		const { email, password, username } = this.state;
		const { errors } = this.props;
		return (
			<div className="container">
				<h2 style={{ marginTop: 40 }} align="center">
					Register
				</h2>
				<form onSubmit={this.handleOnSubmit}>
					<div className="input-container">
						{errors.username && (
							<span className="errors">{errors.username}</span>
						)}
						<Input
							placeholder="Username"
							name="username"
							value={username}
							onChange={this.handleOnChange}
							errors={errors.username ? "error" : null}
						/>
					</div>
					<div className="input-container">
						{errors.email && <span className="errors">{errors.email}</span>}
						<Input
							placeholder="Email"
							name="email"
							value={email}
							onChange={this.handleOnChange}
							errors={errors.email ? "error" : null}
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
							errors={errors.password ? "error" : null}
						/>
					</div>
					<Button>Register</Button>
				</form>
			</div>
		);
	}
}

export default withRouter(RegisterFields);
