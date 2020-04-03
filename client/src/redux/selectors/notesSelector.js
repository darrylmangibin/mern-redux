import { createSelector } from "reselect";

const selectItems = state => state.items;

export const selectNotes = createSelector([selectItems], items => items.notes);

export const selectLoading = createSelector(
	[selectItems],
	items => items.loading
);

export const selectErrors = createSelector(
	[selectItems],
	items => items.errors
);

export const selectNote = createSelector([selectItems], items => items.note);
