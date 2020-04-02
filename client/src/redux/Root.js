import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";

const Root = props => {
	return (
		<PersistGate persistor={persistor}>
			<Provider store={store}>{props.children}</Provider>
		</PersistGate>
	);
};

export default Root;
