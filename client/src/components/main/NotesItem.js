import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const NotesItem = props => {
	const { note } = props;
	return (
		<Link to={`/notes/edit/${note._id}`} className="list-item">
			<p className="list-item__title">{note.title}</p>
			<p className="list-item__subtitle">{`Last edited ${moment(
				note.updatedAt
			).fromNow()}`}</p>
		</Link>
	);
};

export default NotesItem;
