import React, { Fragment, useEffect } from "react";

import NoteItem from "./NoteItem";
import { Button } from "../common";
import { Spinner } from "../layout";

const NotesList = props => {
	const { history, getNotes, items, loading, authenticated } = props;
	useEffect(() => {
		if (authenticated) {
			getNotes();
		}
	}, [authenticated]);

	if (loading) return <Spinner />;
	return (
		<Fragment>
			{items.length <= 0 ? (
				<p className="empty-message">No notes to show</p>
			) : (
				items.map(note => <NoteItem />)
			)}
			<Button onClick={() => history.push("/create")}>Create Note</Button>
		</Fragment>
	);
};

export default NotesList;
