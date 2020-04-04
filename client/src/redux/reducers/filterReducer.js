import { FILTER_TEXT, SORT_BY } from "../actions/types";
const intialState = {
	text: "",
	sortBy: "byCreated ",
};

export default (state = intialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case FILTER_TEXT:
			return {
				...state,
				text: payload,
			};
		case SORT_BY:
			return {
				...state,
				sortBy: payload,
			};
		default:
			return state;
	}
};
