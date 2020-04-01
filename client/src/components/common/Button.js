import React from "react";
import classnames from "classnames";

const Button = ({ secondary, ...props }) => {
	return (
		<button
			className={classnames("button", {
				"button--secondary": secondary
			})}
			{...props}
		>
			{props.children}
		</button>
	);
};

export default Button;
