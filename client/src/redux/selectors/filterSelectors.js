import { createSelector } from "reselect";

const selectFilter = (state) => state.filter;

export const selectText = createSelector(
	[selectFilter],
	(filter) => filter.text
);

export const selectSortBy = createSelector(
	[selectFilter],
	(filter) => filter.sortBy
);
