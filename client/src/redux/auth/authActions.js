import axios from "../../axios";
import setAuthToken from "../../utils/setAuthToken";
import {
	LOGIN_FAIL,
	CLEAR_ERRORS,
	LOGIN_SUCCESS,
	AUTH_USER,
	AUTH_FAIL,
	LOGOUT,
	REGISTER_FAIL,
	REGISTER_SUCCESS
} from "../types";

// Auth User
export const getAuthUser = () => async dispatch => {
	const token = localStorage.getItem("token");
	setAuthToken(token);
	try {
		const res = await axios.get("/auth");
		dispatch({
			type: AUTH_USER,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: AUTH_FAIL
		});
	}
};

// Logout
export const logout = () => dispatch => {
	dispatch({
		type: LOGOUT
	});
};

// LOGIN USER
export const loginUser = formData => async dispatch => {
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	};
	try {
		const res = await axios.post("/auth/login", formData, config);
		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data
		});
		dispatch(getAuthUser());
	} catch (err) {
		let { errors } = err.response.data;
		if (Array.isArray(errors)) {
			errors = errors.reduce((acc, val) => {
				return Object.assign({}, acc, { [val.param]: val.msg });
			}, {});
			dispatch({
				type: LOGIN_FAIL,
				payload: errors
			});
			setTimeout(() => {
				dispatch({
					type: CLEAR_ERRORS
				});
			}, 3500);
		} else {
			dispatch({
				type: LOGIN_FAIL,
				payload: errors
			});
			setTimeout(() => {
				dispatch({
					type: CLEAR_ERRORS
				});
			}, 3500);
		}
	}
};

export const registerUser = formData => async dispatch => {
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	};
	try {
		const res = await axios.post("/users/register", formData, config);
		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data
		})
		dispatch(getAuthUser())
	} catch (err) {
		let { errors } = err.response.data;
		if (Array.isArray(errors)) {
			errors = errors.reduce((acc, val) => {
				return Object.assign({}, acc, { [val.param]: val.msg });
			}, {});
			dispatch({
				type: REGISTER_FAIL,
				payload: errors
			});
			setTimeout(() => {
				dispatch({
					type: CLEAR_ERRORS
				});
			}, 3500);
		} else {
			dispatch({
				type: REGISTER_FAIL,
				payload: errors
			});
			setTimeout(() => {
				dispatch({
					type: CLEAR_ERRORS
				});
			}, 3500);
		}
	}
};
