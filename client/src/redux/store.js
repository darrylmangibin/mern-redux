import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";

import reducer from "./rootReducer";

const initialsState = {};
const middleware = [thunk, logger];

const store = createStore(
	reducer,
	initialsState,
	compose(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

export { store, persistor };
