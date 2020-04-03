import React, { Component } from "react";
import { withRouter } from 'react-router-dom'

import { Input, TextArea, Button } from "../common";

class CreateFields extends Component {
	state = {
		title: "",
		body: ""
	};

	handleOnChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleOnSubmit = e => {
		e.preventDefault();
		const { history } = this.props;
		this.props.addNote(this.state, history);
	};

	render() {
		const { title, body } = this.state;
		const { errors } = this.props;
		return (
			<div className="container">
				<form onSubmit={this.handleOnSubmit}>
					<div className="input-container">
						{errors.title && <span className="errors">{errors.title}</span>}
						<Input
							placeholder="Note title"
							autoComplete="off"
							name="title"
							value={title}
							onChange={this.handleOnChange}
							errors={errors.title ? "error" : null}
						/>
					</div>
					<TextArea
						placeholder="Enter note text"
						name="body"
						value={body}
						onChange={this.handleOnChange}
					/>
					<Button>Create note</Button>
				</form>
			</div>
		);
	}
}

export default withRouter(CreateFields);
