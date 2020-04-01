import React from "react";

import { Input, TextArea, Button } from "../common";

const EditFields = () => {
	return (
		<div className="container">
			<Input />
			<TextArea />
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<Button>Save note</Button>
        <Button secondary>Remove note</Button>
			</div>
		</div>
	);
};

export default EditFields;
