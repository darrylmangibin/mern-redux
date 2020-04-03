import React from "react";

const Loading = () => {
	return (
		<div
			style={{
				position: "absolute",
				transform: "translate(-50%, -50%)",
				top: "50%",
				left: "50%"
			}}
		>
			<h5>Fetching data...</h5>
		</div>
	);
};

export default Loading;
