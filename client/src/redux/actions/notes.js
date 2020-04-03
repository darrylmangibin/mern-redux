import axios from "../../axios";
import setErrors from "../../utils/setErrors";

import {
	GET_NOTES,
	ADD_FAIL,
	ADD_NOTE,
	CLEAR_ERRORS,
	GET_NOTE,
	DELETE_NOTE,
	EDIT_FAIL,
	EDIT_NOTE
} from "../actions/types";

// Get notes
export const getNotes = () => async dispatch => {
	try {
		const res = await axios.get("/notes");
		setTimeout(() => {
			dispatch({
				type: GET_NOTES,
				payload: res.data
			});
		}, 1000);
	} catch (err) {
		console.log(err.message);
	}
};

// Add
export const addNote = (formData, history) => async dispatch => {
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	};

	try {
		const res = await axios.post("/notes", formData, config);
		dispatch({
			type: ADD_NOTE,
			payload: res.data
		});
		history.push("/notes");
	} catch (err) {
		const { errors } = err.response.data;
		setErrors(errors, createErrors => {
			dispatch({
				type: ADD_FAIL,
				payload: createErrors
			});
			setTimeout(() => {
				dispatch({
					type: CLEAR_ERRORS
				});
			}, 3500);
		});
	}
};

// GET note
export const getNote = (id, history) => async (dispatch, getState) => {
	const { notes } = getState().items;
	const note = notes.find(note => note._id === id);
	if (note === undefined) {
		history.push("/notes");
	}
	dispatch({
		type: GET_NOTE,
		payload: note
	});
};

// DELETE
export const deleteNote = (id, history) => async dispatch => {
	try {
		const res = await axios.delete(`/notes/${id}`);
		dispatch({
			type: DELETE_NOTE,
			payload: res.data
		});
		history.push("/notes");
	} catch (err) {
		console.log(err);
	}
};

// EDIT
export const editNote = (id, formData, history) => async dispatch => {
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	};
	try {
		const res = await axios.put(`/notes/${id}`, formData, config);
		dispatch({
			type: EDIT_NOTE,
			payload: res.data
		});
		history.push("/notes");
	} catch (err) {
		const { errors } = err.response.data;
		setErrors(errors, editErrors => {
			dispatch({
				type: EDIT_FAIL,
				payload: editErrors
			});
			setTimeout(() => {
				dispatch({
					type: CLEAR_ERRORS
				});
			}, 3500);
		});
	}
};
