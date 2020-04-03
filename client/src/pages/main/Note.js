import React, { Fragment } from "react";

import { Actions } from "../../components/layout";
import MainNote from "../../components/main/MainNotes";

const Note = () => {
	return (
		<Fragment>
			<Actions />
			<MainNote />
		</Fragment>
	);
};

export default Note;
