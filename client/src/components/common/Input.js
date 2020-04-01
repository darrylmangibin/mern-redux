import React from "react";
import classnames from "classnames";

const Input = props => {
	return (
		<input
			className={classnames("title-input", {
				errors: props.errors
			})}
			{...props}
		/>
	);
};

export default Input;
