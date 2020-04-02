import { createSelector } from "reselect";

const selectNotes = state => state.notes;

export const selectItems = createSelector([selectNotes], notes => notes.items);

export const selectLoading = createSelector([selectNotes], notes => notes.loading)
