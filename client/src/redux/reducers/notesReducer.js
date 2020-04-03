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
import { PURGE } from "redux-persist";

const initialState = {
	notes: [],
	loading: true,
	errors: {},
	note: {}
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_NOTES:
			return {
				...state,
				notes: payload,
				loading: false
			};
		case GET_NOTE:
			return {
				...state,
				note: payload
			};
		case ADD_NOTE:
			return {
				...state,
				notes: [...state.notes, payload],
				errors: {}
			};
		case EDIT_NOTE:
			return {
				...state,
				notes: state.notes.map(note => {
					if(note._id === payload._id) {
						return payload
					} else {
						return note
					}
				})
			}
		case DELETE_NOTE:
			return {
				...state,
				notes: state.notes.filter(note => note._id !== payload._id)
			};
		case ADD_FAIL:
		case EDIT_FAIL:
			return {
				...state,
				errors: payload
			};
		case CLEAR_ERRORS:
			return {
				...state,
				errors: {}
			};
		case PURGE:
			return {
				...state,
				errors: {},
				loading: true,
				note: {}
			};
		default:
			return state;
	}
};
