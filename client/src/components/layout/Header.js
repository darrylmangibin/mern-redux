import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className="header" style={{ display: "flex" }}>
			<div className="container">
				<h1 className="header__title">Mern App</h1>
				<h2 className="header__subtitle">With Redux</h2>
			</div>
			<div style={{ display: "flex", width: 210, justifyContent: "space-between", alignItems: "center", padding: "0px 30px" }}>
				<Link to="/login">Login</Link>
				<Link to="/register">Register</Link>
			</div>
		</header>
	);
};

export default Header;
