import {
	LOGIN_FAIL,
	CLEAR_ERRORS,
	LOGIN_SUCCESS,
	AUTH_FAIL,
	AUTH_USER,
	LOGOUT
} from "../types";

const initialState = {
	authenticated: false,
	errors: {},
	token: null,
	user: null,
	loading: true
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case AUTH_USER:
			return {
				...state,
				authenticated: true,
				user: payload.user,
				token: localStorage.getItem("token"),
				loading: false
			};
		case LOGIN_SUCCESS:
			localStorage.setItem("token", payload.token);
			return {
				...state,
				token: payload.token,
				authenticated: true,
				errors: {}
			};
		case LOGIN_FAIL:
			return {
				...state,
				authenticated: false,
				errors: payload
			};
		case CLEAR_ERRORS:
		case AUTH_FAIL:
			return {
				...state,
				errors: {},
				authenticated: false,
				user: null,
				token: null,
				loading: false
			};
		case LOGOUT:
			localStorage.removeItem("token");
			return {
				...state,
				authenticated: false,
				errors: {},
				token: null,
				user: null,
				loading: true
			};
		default:
			return state;
	}
};
