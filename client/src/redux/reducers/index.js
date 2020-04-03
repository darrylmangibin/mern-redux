import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { createWhitelistFilter } from "redux-persist-transform-filter";
import storage from "redux-persist/lib/storage";
import authReducer from "../reducers/authReducer";
import notesReducer from "../reducers/notesReducer";

const persistConfig = {
	key: "root",
	storage,
	transforms: [
		createWhitelistFilter("items", ["errors", "notes", "loading"],
	)],
	blacklist: ["auth"]
};

const rootReducer = combineReducers({
	auth: authReducer,
	items: notesReducer
});

export default persistReducer(persistConfig, rootReducer);
