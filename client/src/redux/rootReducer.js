import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./auth/authReducer";
import notesReducer from "./notes/notesReducer";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["notes"]
};

const rootReducer = combineReducers({
	auth: authReducer,
	notes: notesReducer
});

export default persistReducer(persistConfig, rootReducer);
