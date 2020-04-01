import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

import NoteItem from "./NoteItem";
import { Button } from "../common";

const NotesList = (props) => {
  const { history } = props
	return (
		<Fragment>
			<p className="empty-message">No notes to show</p>
			<NoteItem />
			<Button onClick={() => history.push("/create")}>Create Note</Button>
		</Fragment>
	);
};

export default withRouter(NotesList);
