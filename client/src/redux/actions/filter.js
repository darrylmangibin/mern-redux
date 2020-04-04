import { FILTER_TEXT, SORT_BY } from "./types";

export const filterNote = (text) => {
	return {
		type: FILTER_TEXT,
		payload: text,
	};
};

export const sortNote = (sort) => {
  console.log(sort)
	return {
		type: SORT_BY,
		payload: sort,
	};
};
