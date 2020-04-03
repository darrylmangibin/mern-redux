import React, { Fragment, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { store } from '../../redux/store/configureStore'
import { CLEAR_ERRORS } from '../../redux/actions/types'

import Create from "./Create";
import Note from "./Note";
import Edit from "./Edit";
import PageNotFound from '../PageNotFound'

const MainApp = props => {
	const { match, getNotes } = props;
	useEffect(() => {
		getNotes()
		store.dispatch({ type: CLEAR_ERRORS });
		// eslint-disable-next-line
	},[])
	return (
		<Fragment>
			<Switch>
				<Route exact path={`${match.url}/edit/:id`} component={Edit} />
				<Route exact path={`${match.url}/create`} component={Create} />
				<Route exact path={`${match.url}/`} component={Note} />
				<Route path="/" component={PageNotFound} />
			</Switch>
		</Fragment>
	);
};

export default MainApp;
