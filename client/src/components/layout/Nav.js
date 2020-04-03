import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<div className="actions">
			<div className="actions__container actions__container--spaced">
				<Link to="/">Home</Link>
				<Link to="/notes">Notes</Link>
				<Link to="/notes/create">Create</Link>
				<Link to="/about">About</Link>
			</div>
		</div>
	);
};

export default Nav;
