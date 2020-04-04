import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Nav = ({ authenticated }) => {
	return (
		<div className="actions">
			<div className="actions__container actions__container--spaced">
				<Link to={authenticated ? "/notes" : "/"}>Home</Link>
				{authenticated && (
					<Fragment>
						<Link to="/notes">Notes</Link>
						<Link to="/notes/create">Create</Link>
					</Fragment>
				)}
				<Link to="/about">About</Link>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps)(Nav);
