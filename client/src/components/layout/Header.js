import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Header = props => {
	const { authenticated, loading, logout } = props;
	const AuthLinks = () => {
		return (
			<Fragment>
				<Link to="/login">Login</Link>
				<Link to="/register">Register</Link>
			</Fragment>
		);
	};

	const GuessLinks = () => {
		return <div onClick={() => logout()} style={{ cursor: "pointer" }}>Logout</div>;
	};

	const renderLinks = () => {
		if (!authenticated && loading) {
			return null;
		} else if (!authenticated && !loading) {
			return <AuthLinks />;
		} else if (authenticated && !loading) {
			return <GuessLinks />;
		}
	};

	return (
		<header className="header" style={{ display: "flex" }}>
			<div className="container">
				<h1 className="header__title">Notes App</h1>
				<h2 className="header__subtitle">Take notes and never forget</h2>
			</div>
			<div
				style={{
					width: 240,
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					padding: "0px 30px"
				}}
			>
				{renderLinks()}
			</div>
		</header>
	);
};

export default Header;
