import { createSelector } from "reselect";

const selectAuth = state => state.auth;

export const selectErrors = createSelector([selectAuth], auth => auth.errors);

export const selectAuthenticated = createSelector(
	[selectAuth],
	auth => auth.authenticated
);

export const selectLoading = createSelector([selectAuth], auth => auth.loading)