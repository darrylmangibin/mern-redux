import { createStore, compose, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "../reducers";

const initialState = {};
const middleware = [thunk, logger];

const store = createStore(
	reducer,
	initialState,
	compose(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

export { store, persistor };
