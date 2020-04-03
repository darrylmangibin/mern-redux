import {
	LOGIN_FAIL,
	CLEAR_ERRORS,
	LOGIN_SUCCESS,
	AUTH_FAIL,
	AUTH_SUCCESS,
	LOGOUT,
	REGISTER_FAIL,
	REGISTER_SUCCESS,
} from "../actions/types";

import { PURGE } from 'redux-persist'

const initialState = {
	authenticated: false,
	errors: {},
	token: null,
	user: null,
	loading: true
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case AUTH_SUCCESS:
			return {
				...state,
				authenticated: true,
				errors: {},
				token: localStorage.getItem("token"),
				user: payload.user,
				loading: false
			};
		case LOGIN_SUCCESS:
		case REGISTER_SUCCESS:
			localStorage.setItem("token", payload.token);
			return {
				...state,
				authenticated: true,
				token: payload.token,
				errors: {}
			};
		case LOGIN_FAIL:
		case REGISTER_FAIL:
			return {
				...state,
				authenticated: false,
				errors: payload
			};

		case AUTH_FAIL:
			return {
				...state,
				authenticated: false,
				token: null,
				user: null,
				loading: false
			};
		case LOGOUT:
			localStorage.removeItem("token");
			return {
				...state,
				authenticated: false,
				token: null,
				user: null,
				loading: false
			};
		case CLEAR_ERRORS:
			return {
				...state,
				errors: {}
			};
		case PURGE:
			return state;
		default:
			return state;
	}
};
