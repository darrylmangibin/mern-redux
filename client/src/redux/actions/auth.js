import axios from "../../axios";
import setErrors from "../../utils/setErrors";
import setAuthToken from "../../utils/setAuthToken";
import { PURGE } from 'redux-persist'

import {
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	CLEAR_ERRORS,
	AUTH_FAIL,
	AUTH_SUCCESS,
	LOGOUT,
	REGISTER_FAIL,
	REGISTER_SUCCESS
} from "../actions/types";

// AUTH USER
export const authUser = () => async dispatch => {
	const token = localStorage.getItem("token");
	setAuthToken(token);
	try {
		const res = await axios.get("/auth");
		dispatch({
			type: AUTH_SUCCESS,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: AUTH_FAIL
		});
	}
};

// LOGIN
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
		dispatch(authUser());
	} catch (err) {
		let { errors } = err.response.data;
		setErrors(errors, authErrors => {
			dispatch({
				type: LOGIN_FAIL,
				payload: authErrors
			});
			setTimeout(() => {
				dispatch({
					type: CLEAR_ERRORS
				});
			}, 3500);
		});
	}
};

// LOGOUT
export const logout = () => async dispatch => {
	dispatch({
		type: LOGOUT
	});
	dispatch({
		type: PURGE,
		key: "root",
		result: () => null
	});
};

// REGISTER
export const registerUser = formData => async dispatch => {
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	};

	try {
		const res = await axios.post("/users/register", formData, config);
		dispatch({
			type:REGISTER_SUCCESS,
			payload: res.data
		})
		dispatch(authUser())
	} catch (err) {
		let { errors } = err.response.data;
		setErrors(errors, registerErrors => {
			dispatch({
				type: REGISTER_FAIL,
				payload: registerErrors
			});
			setTimeout(() => {
				dispatch({
					type: CLEAR_ERRORS
				});
			}, 3500);
		});
	}
};
