import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

import { Button } from "../common";
import NotesItem from "./NotesItem";
import { Loading } from "../layout";

const NotesList = props => {
	const { match, history, notes, loading } = props;
	if (loading) return <Loading />;
	return (
		<Fragment>
			{notes.length <= 0 ? (
				<p className="empty-message">No notes to show</p>
			) : (
				notes.map(note => <NotesItem key={note._id} note={note} />)
			)}
			<Button onClick={() => history.push(`${match.url}/create`)}>
				Create Note
			</Button>
		</Fragment>
	);
};

export default withRouter(NotesList);
