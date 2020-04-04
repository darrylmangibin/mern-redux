import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { createWhitelistFilter } from "redux-persist-transform-filter";
import storage from "redux-persist/lib/storage";
import authReducer from "../reducers/authReducer";
import notesReducer from "../reducers/notesReducer";
import filterReducer from './filterReducer';

const persistConfig = {
	key: "root",
	storage,
	transforms: [
		createWhitelistFilter("items", ["errors", "notes", "loading"],
	)],
	blacklist: ["auth", "filter"]
};

const rootReducer = combineReducers({
	auth: authReducer,
	items: notesReducer,
	filter: filterReducer
});

export default persistReducer(persistConfig, rootReducer);
