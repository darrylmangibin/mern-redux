import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import moment from "moment";

import { Button } from "../common";
import NotesItem from "./NotesItem";
import { Loading } from "../layout";

const NotesList = (props) => {
	const { match, history, notes, loading, text, sortBy } = props;
	if (loading) return <Loading />;
	return (
		<Fragment>
			{notes.length <= 0 ? (
				<p className="empty-message">No notes to show</p>
			) : (
				notes
					.map((note) => <NotesItem key={note._id} note={note} />)
					.filter((list) => {
						const filterNote = list.props.note;
						if (
							filterNote.title.toLowerCase().indexOf(text.toLowerCase()) > -1
						) {
							return list;
						}
					})
					.sort((a, b) => {
						if (sortBy === "byCreated") {
							return moment().valueOf(a.props.note.createdAt) >
								moment().valueOf(b.props.note.createdAt)
								? -1
								: 1;
						} else if (sortBy === "byEdited") {
							return a.props.note.updatedAt > b.props.note.updatedAt ? -1 : 1;
						} else if (sortBy === "alphabetical") {
							return a.props.note.title.toLowerCase() <
								b.props.note.title.toLowerCase()
								? -1
								: 1;
						}
					})
			)}
			<Button onClick={() => history.push(`${match.url}/create`)}>
				Create Note
			</Button>
		</Fragment>
	);
};

export default withRouter(NotesList);
