import React from "react";
import classnames from "classnames";

const TextArea = props => {
	return (
		<textarea
			className={classnames("body-input", {
				errors: props.errors
			})}
			{...props}
		/>
	);
};

export default TextArea;
