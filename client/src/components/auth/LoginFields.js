import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { store } from "../../redux/store/configureStore";
import { CLEAR_ERRORS } from "../../redux/actions/types";

import { Input, Button } from "../common";
import { Loading } from "../layout";

class LoginFields extends Component {
	state = {
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
		const { email, password } = this.state;
		e.preventDefault();
		const formData = { email, password };
		this.props.loginUser(formData);
	};

	render() {
		const { email, password } = this.state;
		const { errors, loading } = this.props;
		if (loading) return <Loading />;
		return (
			<div className="container">
				<h2 style={{ marginTop: 40 }} align="center">
					Login
				</h2>
				<form onSubmit={this.handleOnSubmit}>
					<div className="input-container">
						{errors.email && <span className="errors">{errors.email}</span>}
						<Input
							placeholder="Email"
							autoComplete="off"
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
							type="password"
							name="password"
							value={password}
							onChange={this.handleOnChange}
							errors={errors.password ? "error" : null}
						/>
					</div>
					<Button>Login</Button>
				</form>
			</div>
		);
	}
}

export default withRouter(LoginFields);
