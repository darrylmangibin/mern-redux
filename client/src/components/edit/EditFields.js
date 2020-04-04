import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Input, TextArea, Button } from "../common";

class EditFields extends Component {
	state = {
		title: "",
		body: "",
	};

	componentDidMount() {
		const { getNote, match, history } = this.props;
		getNote(match.params.id, history);
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		this.setState({
			title: nextProps.note.title,
			body: nextProps.note.body,
		});
	}

	handleOnChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleOnSubmit = (e) => {
		e.preventDefault();
		const { title, body } = this.state;
		const { match, history } = this.props;
		const formData = {
			title,
			body,
			updatedAt: Date.now(),
		};
		this.props.editNote(match.params.id, formData, history);
	};

	render() {
		const { title, body } = this.state;
		const { deleteNote, match, history, errors } = this.props;
		return (
			<div className="container">
				<form onSubmit={this.handleOnSubmit}>
					<div className="input-container">
						{errors.title && <span className="errors">{errors.title}</span>}
						<Input
							placeholder="Note title"
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
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<Button type="submit">Save note</Button>
						<Button
							type="button"
							secondary
							onClick={() => deleteNote(match.params.id, history)}
						>
							Remove note
						</Button>
					</div>
				</form>
			</div>
		);
	}
}

export default withRouter(EditFields);
