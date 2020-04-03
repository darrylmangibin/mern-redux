import NotesList from "../../main/NotesList";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
	selectNotes,
	selectLoading
} from "../../../redux/selectors/notesSelector";

const mapStateToProps = createStructuredSelector({
	notes: selectNotes,
	loading: selectLoading
});

const NotesListContainer = connect(mapStateToProps)(NotesList);

export default NotesListContainer;
