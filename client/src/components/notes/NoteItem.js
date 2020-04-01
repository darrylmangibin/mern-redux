import React from "react";
import { Link } from "react-router-dom";

const NoteItem = () => {
	return (
		<Link to="/edit/1" className="list-item">
			<p className="list-item__title">Unnamed note</p>
			<p className="list-item__subtitle">Last edited a few seconds ago</p>
		</Link>
	);
};

export default NoteItem;
