import React from "react";

const TextArea = ({ ...props }) => {
	return <textarea className="body-input" {...props} />;
};

export default TextArea;
