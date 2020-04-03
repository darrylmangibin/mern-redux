import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

const AuthButton = ({ secondary, ...props }) => {
	return (
		<Link
			className={classnames("button", {
				"button--secondary": secondary
			})}
			{...props}
		>
			{props.children}
		</Link>
	);
};

export default AuthButton;
